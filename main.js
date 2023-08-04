const MainScreen = require('./screens/MainScreen/MainScreen');
const {app, BrowserWindow} = require('electron');

let mainWindow ;

app.whenReady().then(()=>{
    mainWindow = new MainScreen();
    
})

