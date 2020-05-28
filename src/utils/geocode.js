const request = require('request')

const geocode = (address, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address + '.json?access_token=pk.eyJ1Ijoia2hhY2R1eTQyOTMiLCJhIjoiY2thZTdpNjR3MGZuODJ6cXQ0Z2dkajNpaSJ9.i9uQvNroCs3D72BBplwksg&limit=1'

    request({ url: geocodeURL, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location! Try another search.', undefined)
        } else {
            callback( undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode