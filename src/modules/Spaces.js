
const fs = require('fs');
const AWS = require('aws-sdk') // Uploading to S3

// AWS S3 Config
const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACES_ENDPOINT);
const s3 = new AWS.S3({
	endpoint: process.env.DO_SPACES_ENDPOINT,
	accessKeyId: process.env.DO_SPACES_KEY,
	secretAccessKey: process.env.DO_SPACES_SECRET
});

module.exports = {

  
  
  Upload: async function (ImageName) {
    let params = { 
      Bucket: process.env.DO_BUCKET_NAME,  
      Key: ImageName,
      ContentType: "image/jpeg",
      Body: fs.readFileSync( __dirname + `/../../public/images/compressed/${ImageName}`),
      ACL: 'public-read',
    }
    s3.putObject(params, (err, data) => {
      if(err) {
        console.log(err)
      } else {
        console.log(`Uploaded: ${ImageName}`)
        console.log(data)
        return ImageName
      }
    })  
  }

}
