const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  description: String,
  richDescription:   String,
  image: String,
  images: String,
  brand: Boolean,
  price: String, 
  category: String,
  countInStock: String,
  rating: Boolean,
  isFeatured: String,
  dateCreated: Date.now

});

const Product = mongoose.model('product', productSchema);

module.exports = Product;