if (process.env.NODE_ENV === 'development') {
    require('electron-reload')(__dirname, {
        electron: require(`${__dirname}/node_modules/electron`)
    });
}

const AutoLaunch = require('electron-auto-launch');
const { app, BrowserWindow, shell, globalShortcut, ipcMain } = require('electron/main');
const path = require('node:path');

let win;

const bangoAutoLauncher = new AutoLaunch({
    name: 'Bango',
    path: app.getPath('exe')
});

function createWindow() {
    win = new BrowserWindow({
        width: 350,
        height: 65,
        frame: false,
        transparent: true,
        resizable: false,
        show: false,
        icon: path.join(__dirname, 'assets/icon.png'),
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            enableRemoteModule: false,
            nodeIntegration: false
        }
    });

    win.center();
    win.loadFile('index.html');

    win.once('ready-to-show', () => {
        win.setAlwaysOnTop(true, 'normal');
    });

    win.webContents.setWindowOpenHandler(({ url }) => {
        shell.openExternal(url);
        return { action: 'deny' };
    });
}

ipcMain.on('hide-window', () => {
    if (win) win.hide();
});

app.whenReady().then(() => {
    bangoAutoLauncher.isEnabled().then((isEnabled) => {
        if (!isEnabled) {
            bangoAutoLauncher.enable();
        }
    });

    createWindow();

    globalShortcut.register('Control+Space', () => {
        if (win) {
            win.isVisible() ? win.hide() : win.show();
        } else {
            createWindow();
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    } else {
        win = null;
    }
});
