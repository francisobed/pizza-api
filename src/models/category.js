const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  colour: String,
  icon: String,
  image: String
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;