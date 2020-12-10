const axios = require('axios')

let isDev = false

if (
	process.env.NODE_ENV !== undefined &&
	process.env.NODE_ENV === 'development'
) {
	isDev = true
}


module.exports = {

  POST: async function (Type, ImageName) {

    let Asset = `assets.radbooth.com/${ImageName}`
    let Endpoint = `http://localhost:5000/api/v1`

    axios
      .post(`${Endpoint}/${Type}`, {
        user: 'kevinmerinsky@gmail.com',
        event: 'Holiday Party',
        asset: Asset
      })
      .then((res) => {
        if(isDev){
          console.log(`statusCode: ${res.status}`)
        }
      })
      .catch((error) => {
        console.error(error)
      })

  }
}
