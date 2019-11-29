const os = require("os");
const path = require("path");
const electron = require("electron");
const isDev = require("electron-is-dev");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

const URL = isDev
  ? "http://localhost:3000"
  : `file://${path.join(__dirname, "./../build/index.html")}`;

function createWindow() {
  mainWindow = new BrowserWindow({ height: 600, width: 800 });
  mainWindow.loadURL(URL);
  mainWindow.on("closed", () => app.quit());

  if (isDev) {
    console.log("development mode");
    mainWindow.webContents.openDevTools();
  }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
