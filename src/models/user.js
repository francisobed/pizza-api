const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    email: String,
    passwordHash: String,
    street: String,
    apartment: String,
    city: String,
    zip: String,
    country: String,
    phone: Number,
    isAdmin: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;