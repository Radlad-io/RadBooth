// const sharp = require('sharp'); // Image compression


module.exports = {

  Compress: async function (ImageName, quality) {
    try {
      const image = await sharp(__dirname + `/../../public/images/captures/${ImageName}`)
        .resize(2000)
        .jpeg({ quality: quality })
        .toFile(__dirname + `/../../public/images/compressed/${ImageName}`);
      console.log(`Compressed: ${ImageName}`);
      return ImageName;
    } catch (e) {
      console.warn(e);
    }
  }

}
