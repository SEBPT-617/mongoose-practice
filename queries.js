const mongoose = require("mongoose");
const dotenv = require("dotenv"); 

dotenv.config();

const albumController = require("./controllers/albumsCtrl")

const runQueries = async () => {
  console.log('Queries running')

  const newAlbums = [
    {
      "title": "emails i can't send",
      "releaseDate": "2022-07-15",
      "genre": "Pop",
      "artist": "Sabrina Carpenter",
      "tracks": ["emails i can't send", "Vicious",
      "Read your Mind","Tornado Warnings","because i liked a boy"
      ]
  },
  {
    "title": "Johnny Swim",
    "releaseDate": "2022-04-08",
    "genre": "Folk, Soul",
    "artist": "Johnny Swim",
    "tracks": ["Heaven is Everywhere", "Devastating", "Desmond's Song", "Holler", "Goodbye Road"
    ]
  },
  {
    "title": "Golden Hour: Part 1",
    "releaseDate": "2024-05-31",
    "genre": "Kpop",
    "artist": "ATEEZ",
    "tracks": ["Golden Hour", "Blind", "WORK", "Empty Box", "Shaboom", "Siren"]
  }
  ]

  // await albumController.createAlbum(newAlbums)
  //await albumController.deleteAlbum("66de1ac0694f288984fa2f2a")

}

const connect = async () => {

  await mongoose.connect(process.env.MONGODB_URI);

  console.log("Connected to MongoDB");

  await runQueries();
  await mongoose.disconnect();

  console.log("Disconnected from MongoDB");
  process.exit();
};

connect();
