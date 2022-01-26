const csvtojson = require('csvtojson')

exports.convertCSVToJSON = async file => {
  try {
    const data = await csvtojson().fromFile(file)
    return data
  } catch (e) {
    return e
  }
}
