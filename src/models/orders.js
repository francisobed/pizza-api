const { number } = require('joi');
const mongoose = require('mongoose');


const orderSchema = mongoose.Schema({
  name: String, // String is shorthand for {type: String}
  orderItems: String,
  shippingAddress1:   String,
  shippingAddress2:   String,
  city: String,
  zip: String,
  country: Boolean,
  phone: Number, 
  status: String,
  totalPrice: String,
  rating: Number,
  user: String,
  dateOrdered: Date.now
});

const Order = mongoose.model('product', orderSchema);

module.exports = Order;