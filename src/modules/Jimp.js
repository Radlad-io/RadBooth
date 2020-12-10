var Jimp = require('jimp');
const Spaces = require('./Spaces')

module.exports = {

  Compress: async function (ImageName, quality) {
    const ImagePath = __dirname + '/../../public/images/captures/' + ImageName
    const Output = __dirname + '/../../public/images/compressed/' + ImageName

    Jimp.read(ImagePath)
      .then(image => {
        return image
          .resize(2000, Jimp.AUTO) // resize
          .quality(60) // set JPEG quality
          .write(Output) // save
      })
      //TODO: Try to move this back into the main process
      .then(() => {
        console.log(ImagePath)
        Spaces.Upload(ImagePath)
      })
      .catch(err => {
        console.error(err);
      });

    return ImageName
  }
}