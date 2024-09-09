const Album = require('../models/Album')

async function createAlbum(data) {
  try {
  const album = await Album.create(data)
  console.log("DB response", album)
} catch(err) {
  console.log(err)
}
}

async function deleteAlbum(id) {
  try {
    const deletedAlbum = await Album.findByIdAndDelete(id)
    console.log("Deleted Album", deletedAlbum )
  } catch(err) {
    console.log(err)
  }
}

module.exports = {
  createAlbum,
  deleteAlbum
}