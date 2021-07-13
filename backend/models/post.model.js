const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  photo: { type: String },
  price: { type: Number },
  phone: { type: String },
});

module.exports = mongoose.model('Post', postSchema);
