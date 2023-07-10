const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    orderItems: String, // orderItems[]
    shippingAddress1: String,
    shippingAddress2: String,
    city: String,
    zip: String,
    country: String,
    phone: Number,
    status: String,
    totalPrice: Number,
    user: String, //User
    dateOrdered: Date.now
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;