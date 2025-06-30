import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
console.log("✅ Preload script loaded!");
// Custom APIs for renderer
const api = {
  closeApp: () => ipcRenderer.send('close-app'),
  openExe: (exeName) => {
    console.log(`✅ openExe called in preload with ${exeName}`);
    ipcRenderer.send('open-exe', exeName); // Pass exe name to main process
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
// Expose to renderer
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI);
    contextBridge.exposeInMainWorld('api', api);
  } catch (error) {
    console.error('❌ Failed to expose APIs to renderer:', error);
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}
