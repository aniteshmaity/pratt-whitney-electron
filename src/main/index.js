import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { exec } from 'child_process'
import { spawn } from 'child_process';
import { existsSync } from 'fs';
function createWindow() {

const isDev = !app.isPackaged; 
console.log("Running in", isDev ? "Development" : "Production", "mode");
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
  fullscreen: !isDev,  
  kiosk: isDev,       
  frame: isDev,        
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,

    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
  });
  mainWindow.webContents.on('before-input-event', (event, input) => {
    const currentUrl = mainWindow.webContents.getURL();
    
    const isAirplanePage = currentUrl.includes('/A100years/yearCourasal'); // customize this
  
    if (
      isAirplanePage &&
      (
        input.key === 'F5' ||
        (input.control && input.key.toLowerCase() === 'r') ||
        (input.meta && input.key.toLowerCase() === 'r')
      )
    ) {
      console.log("Reload blocked on airplane page!");
      event.preventDefault();
    }
  });

  // Add keyboard shortcut to toggle DevTools in production
// mainWindow.webContents.on('did-finish-load', () => {
//   mainWindow.webContents.executeJavaScript(`
//     document.addEventListener('keydown', (e) => {
//       if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
//         require('electron').ipcRenderer.send('toggle-devtools');
//       }
//     });
//   `);
// }); 
  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.commandLine.appendSwitch("touch-events", "enabled");
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

 
  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  // ipcMain.on('open-exe', () => {
  //   console.log("Received 'open-exe' event in main process!");
  //   const exePath = join(app.getAppPath(), 'resources', 'connected-aviation.exe'); // Correct path for production
  //   exec(`"${exePath}"`, (error, stdout, stderr) => {
  //     if (error) {
  //       console.error(`Error executing file: ${error}`);
  //       return;
  //     }
  //     console.log(`STDOUT: ${stdout}`);
  //     console.error(`STDERR: ${stderr}`);
  //   });
  // });

 ipcMain.on('open-exe', (event, exeName) => {
  if (!exeName) {
    console.error('❌ No exe name provided!');
    return;
  }

  let workingDir;
  const allowedExes = {
    'connected-aviation.exe': 'ConnectedAviation',
    'f35.exe': 'F35'
  };

  const folderName = allowedExes[exeName];

  if (!folderName) {
    console.error(`❌ Attempt to open unknown or disallowed exe: ${exeName}`);
    return;
  }

  // Set workingDir based on packaging
  if (app.isPackaged) {
    workingDir = join(process.resourcesPath, folderName);
  } else {
    workingDir = join(__dirname, '../../', folderName);
  }

  const exePath = join(workingDir, exeName);
  console.log('Launching exe from:', exePath);
  console.log('Working directory:', workingDir);
  if (!existsSync(exePath)) {
    console.error('EXE not found at:', exePath);
    return;
  }
  try {
    const child = spawn(exePath, [], {
      cwd: workingDir,
      detached: true,
      stdio: 'ignore'
    });
    
    child.on('error', (err) => {
      console.error('Failed to start process:', err);
    });
    
    child.unref();
  } catch (err) {
    console.error('Error spawning process:', err);
  }
});
  
  ipcMain.on('close-app', () => {
    app.quit(); // Close the application when 'close-app' event is received
  });


  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})


// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
