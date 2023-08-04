const path = require('path');
const {BrowserWindow} = require('electron');


class MainScreen{

    window;

    position = {
        width: 1000,
        height: 600,
        maximized: true,
    }

    constructor(){
        this.window = new BrowserWindow({
            width: this.position.width,
            height: this.position.height,
            title: 'sla',
            show: true,
            webPreferences: {
                contextIsolation: true,
                preload: path.join(__dirname, "./mainPreload.js"),
            },
        })
    
        this.window.loadFile('./screens/MainScreen/mainScreen.html');
    }

}

module.exports = MainScreen;