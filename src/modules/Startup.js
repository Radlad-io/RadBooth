const util = require('util')
const exec = util.promisify(require('child_process').exec)
const chalk = require('chalk')
const getRepoInfo = require('git-repo-info')

const Settings = require('./Settings')
const Camera = require('./Camera')
const Utility = require('./Utility')


module.exports = {
    InitializeCamera: async function () {
        Camera.retrieveCameraModel()
            .then(() => Camera.changeSetting('iso', Settings.Camera.iso))
            .then(() => Camera.changeSetting('shutterspeed', Settings.Camera.shutterspeed))
            .then(() => Camera.changeSetting('f-number', '5.0'))
            .catch(() => Utility.Log('error', 'Failed to initialize camera. Check connection.'))
    },
    Message: function (PORT) {
        console.log(`
        ${chalk.bold(`
 _____ _____ ____  _____ _____ _____ _____ _____ _____    
| __  |  _  |     | __  |     |     |     |_   _|  |  |   
|    -|     |  |  | __ -|  |  |  |  |  |  | | | |     |   
|__|__|__|__|____/|_____|_____|_____|_____| |_| |__|__|   
_______________________________________________________   
                                                          
    `)}
A very rad photo booth.           http://localhost:${PORT}
Last Updated:                  ${getRepoInfo().committerDate}             
      `)
    }
}


