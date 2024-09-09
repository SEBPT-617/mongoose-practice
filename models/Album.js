const mongoose = require("mongoose")

const albums = {
  title: String,
  artist: String,
  genre: String,
  releaseDate: Date,
  tracks: [String],
}

const albumSchema = new mongoose.Schema(albums)

const Album = mongoose.model('Album', albumSchema)

module.exports = Album
