console.log("working");

const { app, BrowserWindow, session } = require("electron");
const path = require("path");
const { ipcmain } = require("electron");

let icounter = 0;
const createWindow = () => {
    const win = new BrowserWindow({
        width : 800,
        height : 600,
        title: 'tutorial',
        icon: './car_wheel_right.png',
        webPreferences : {
            contextIsolation: true,
            preload : path.join(__dirname,'./preload.js')
        }
    });

    // to loadfile
    // win.setMenu(null)
    win.loadFile("./views/home/index.html")

    setInterval( () => {
        icounter++
        win.webContents.send('somthing', icounter)
    },1500)

    // to open devtools.
    win.openDevTools()
}

// calling create window when app is ready
app.whenReady().then(()=>{
    createWindow();
});

