console.log("preload");
const Store = require("electron-store");
// contextBridge : Create a safe, bi-directional, synchronous bridge across isolated contexts
const { contextBridge, ipcRenderer } = require('electron');

let config = new Store();

let saveDetails = (fname,lname) => {
    console.log("save");
    console.log(fname);
    console.log(lname);
    config.set("lname", lname);
    config.set("fname", fname);
}

let getDetails = () => {
    return {
        fname : config.get("fname"),
        lname : config.get("lname")
    }
}

let bridge = {
    saveDetails : saveDetails,
    getDetails : getDetails
}

// get her from webContent.send
let indexBridge = {
    
    somthinghappened : (callback)=>{
        console.log("somthinghappend console preload")
         ipcRenderer.on("somthing",callback)
}}


contextBridge.exposeInMainWorld("Bridge",bridge);

// sned it renderer.js
contextBridge.exposeInMainWorld("indexBridge",indexBridge);
