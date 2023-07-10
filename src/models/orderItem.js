const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    product: String,
    quantity: Number,
})

const OrderItem = mongoose.model('OrderItems', orderSchema)

module.exports = OrderItem;