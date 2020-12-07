const fs = require('fs')
const path = require('path')
const Settings = require('./Settings')

module.exports = {

  Log: function (type, msg) {
    if (Settings.Booth.debug === true && type === 'error') {
      console.log(`${chalk.white.bold.bgRed('ERROR')}: ${chalk.italic(msg)}`)
    } else (
      console.log(`${chalk.bold(msg)}`)
    )
  },

  DeletePreviewImages: function () {
    const directory = './public/images/preview';
    fs.readdir(directory, (err, files) => {
      if (err) throw err;

      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    });
  },

  DeleteCapturedImages: function () {
    const directory = './public/images/captures';
    fs.readdir(directory, (err, files) => {
      if (err) throw err;
      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    });
  },

  DeleteCompressedImages: function () {
    const directory = './public/images/compressed';
    fs.readdir(directory, (err, files) => {
      if (err) throw err;
      for (const file of files) {
        fs.unlink(path.join(directory, file), err => {
          if (err) throw err;
        });
      }
    });
  },


  setDate: function () {
    const d = new Date()
    const date = d.getMonth() + 1 + '-' + d.getDate() + '-' + d.getFullYear()
    Settings.Booth.Date = date
    this.debugOutput(`Date is ${Settings.Booth.Date}`)
  }

}
