const express = require('express');
//models
const Register = require('../../models/register')



exports.createAccount = async (req, res) => {
    try {
    
    let {title, firstName, lastName, email, password, confirmPassword, role} = req.body;

    const register = new Register({
        title,
        firstName, 
        lastName, 
        email, 
        password, 
        confirmPassword, 
        role
    })

        await register.save();
        res.status(200).json({success: true, register})
        
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err
        }) 
    }
};

exports.getAllUsers = async (req, res) => {
    try {

        const registeredUsers = await Register.find({});
        res.status(200).json({success: true, registeredUsers})
        
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err
        }) 
    }
};