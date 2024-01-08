const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  savedMovies: [
    {
      tmdbId: {
        type: String,
      },
      type: {
        type: String
      }
    },
  ],
});


const User = mongoose.model("User", userSchema);
// const Movie = mongoose.model("Movie",movieSchema);

module.exports = {
  User
}