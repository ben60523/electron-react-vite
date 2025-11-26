export interface IElectronAPI {
  loadVersion: (platform: string) => Promise<string>,
}

declare global {
  interface Window {
    ipcRenderer: IElectronAPI
  }
}
