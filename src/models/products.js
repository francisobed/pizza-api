const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    description: String,
    richDescription: String,
    image: String,
    images: String,
    brand: String,
    price: Number,
    category: String, //Category
    countInStock: Number,
    rating: Number,
    isFeatured: Boolean,
    dateCreated: Date, //Date.now

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;