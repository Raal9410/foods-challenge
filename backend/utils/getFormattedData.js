const csvtojson = require('csvtojson')

exports.convertCSVToJSON = async file => {
  try {
    const data = await csvtojson().fromFile(file)
    return data.map(e => {
      e.tags = JSON.parse(e.tags.replaceAll("'", '"'))
      return e
    })
  } catch (e) {
    return e
  }
}
