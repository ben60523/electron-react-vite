import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

import { isDev } from './util.js';

app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(app.getAppPath(), '/dist-electron/preload.js'),
    }
  });
  if (isDev()) {
    mainWindow.loadURL('http://localhost:5555');
  } else {
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'))
  }
});

ipcMain.handle('load-version', async (event, arg) => {
  if (arg === 'node') {
    return process.versions.node;
  } else if (arg === 'chrome') {
    return process.versions.chrome;
  } else if (arg === 'electron') {
    return process.versions.electron;
  }
})