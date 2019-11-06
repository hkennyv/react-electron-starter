const os = require("os");
const path = require("path");
const electron = require("electron");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

const URL =
  process.env.NODE_ENV === "production"
    ? `file://${path.join(__dirname, "./../build/index.html")}`
    : "http://localhost:3000";

function createWindow() {
  mainWindow = new BrowserWindow({ height: 600, width: 800 });
  mainWindow.loadURL(URL);
  mainWindow.on("closed", () => app.quit());

  if (process.env.NODE_ENV !== "production") {
    mainWindow.webContents.openDevTools();
  }
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
