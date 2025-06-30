const labelPositions = {
    turbine11: {
      label: 'Fan Case',
      position: [0.85, 0, 0.8],
      rotation: [0, 0, 0],
      target: [0.25, 0, 0.7] ,
      startOffset: [0, 0, 0],

    },
    gearLeft: {
      label: 'Inlet Cone',
      position: [0, 0.72, 1],
      rotation: [0, 0, 0],
      target: [0, -0.5, 0.55]  
    },
    cockpit: {
      label: 'LP Fan Rotor',
      position: [-0.9, 0, 1],
      rotation: [0, 0.2, 0],
      target: [0.1, 0, 0.4]  ,
      startOffset: [0, 0, 0],
    },
    Exhaust: {
        label: 'Exhaust Case',
        position: [0.4, -0.6, -0.6],            
        rotation: [0, 0.7, 0],                 
        target: [0.4, 0.2, -0.6] 
      },
      ExhaustCone: {
        label: 'Exhaust Cone',
        position: [0.9, -0.4, -1],
        rotation: [0.02, 1.54,0],
        target: [0.7, 0.4, -1]  
      },
      
    OliTank: {
        label: 'Oil Tank',
        position: [0.4, -0.6, 0.65],
        rotation: [0, 0.7, 0],
        target: [0.4, 0, 0.65]  
      },
      

    // Add more as needed
  }
  export default labelPositions;