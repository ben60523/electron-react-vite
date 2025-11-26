// preload.ts
import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld('ipcRenderer', {
  loadVersion: (arg: string) => ipcRenderer.invoke('load-version', arg)
});
