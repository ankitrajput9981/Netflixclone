const express = require("express");
const mongoose = require("mongoose");
const contactSchema =  new mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    confirm_password:{
        type: String

    }
});

const Contact = new mongoose.model("Contact",contactSchema);
module.exports = Contact;