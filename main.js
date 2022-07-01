console.log("working");

const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
    const win = new BrowserWindow({
        width : 800,
        height : 600,
        webPreferences : {
            preload : path.join(__dirname,'./preload.js')
        }
    });

    // to loadfile
    win.loadFile("index.html")

    // to open devtools.
    win.openDevTools()
}

// calling create window when app is ready
app.whenReady().then(()=>{
    createWindow();
});

