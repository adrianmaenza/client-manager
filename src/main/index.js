const electron = require("electron")
const { app, BrowserWindow } = electron
const { clients } = require('./storage/index.js')

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`);
});