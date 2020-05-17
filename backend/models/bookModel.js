const mongoose = require('mongoose');
const slugify = require('slugify');
const User = require('./userModel');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A book must have a name'],
    unique: true,
    trim: true,
  },
  author: {
    type: String,
  },
  slug: String,
  ISBN: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, 'A book must have a price'],
  },
  description: {
    type: String,
  },
});

const Book = mongoose.model('Tour', bookSchema);

module.exports = Tour;
