const path = require('path')
const url = require('url')
const { app, BrowserWindow, ipcMain } = require('electron')
const sharp = require('sharp');

const Camera = require('./src/modules/Camera')
const Utility = require('./src/modules/Utility')

let mainWindow

// TODO: Temp info, replace with local store data
let info = {
	user: 'kevinmerinsky',
	event: 'Holiday-Party'
}

let isDev = false

if (
	process.env.NODE_ENV !== undefined &&
	process.env.NODE_ENV === 'development'
) {
	isDev = true
}

function createMainWindow() {
	mainWindow = new BrowserWindow({
		width: isDev ? 1836 : 1280 ,
		height: isDev ? 825 : 800,
		show: false,
		backgroundColor: 'white',
		icon: `${__dirname}/assets/icon.png`,
		webPreferences: {
			nodeIntegration: true,
		},
	})

	let indexPath

	if (isDev && process.argv.indexOf('--noDevServer') === -1) {
		indexPath = url.format({
			protocol: 'http:',
			host: 'localhost:8080',
			pathname: 'index.html',
			slashes: true,
		})
	} else {
		indexPath = url.format({
			protocol: 'file:',
			pathname: path.join(__dirname, 'dist', 'index.html'),
			slashes: true,
		})
	}

	mainWindow.loadURL(indexPath)

	// Don't show until we are ready and loaded
	mainWindow.once('ready-to-show', () => {
		mainWindow.show()

		// Open devtools if dev
		if (isDev) {
			// TODO: Fix implementation of react devtools
			// const {
			// 	default: installExtension,
			// 	REACT_DEVELOPER_TOOLS,
			// } = require('electron-devtools-installer')

			// installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
			// 	console.log('Error loading React DevTools: ', err)
			// )
			mainWindow.webContents.openDevTools()
		}
	})

	mainWindow.on('closed', () => (mainWindow = null))
}

app.on('ready', createMainWindow)

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit()
	}
})

app.on('activate', () => {
	if (mainWindow === null) {
		createMainWindow()
	}
})
 

ipcMain.on('Image:Capture', (e) => {
	let {user, event} = info
	Camera.Capture(user, event)
	.then((ImageName) => {
		sharp(`./public/images/captures/${ImageName}`)
			.resize(2000)
			.jpeg({ quality: 100 })
			.toFile(`./public/images/compressed/${ImageName}`)
			.catch((err) => console.warn(err)); // send a warning to the console if there are any errors
	})
}) 





// Stop error
app.allowRendererProcessReuse = true
