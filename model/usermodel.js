const mongoose = require("mongoose")

const data = new mongoose.Schema({
    name:{
        type: String,
        unique: true,
        required: [true, "username is required"],
        minlenght: [5,"username must have astleast 5 characters long"],
    } ,

    password:{
        type: String,
        required:[true, "password is required"],
        minlength:[5,"password must have atleast 5 digits long"],
        // maxlangth:[20, "password must have atleast 20 characters"]
    } ,
    email:{
        type: String,
        unique: true,
        required:[true,"email is required"],
        lowercase: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    } ,
    age: Number,
    gender: String,
    dob: String,
    image: String,
    religion: String,
    state: String,
    city: String,
    education: String,
    number: Number,
    about: String,
    image1: String,
    image2: String,
    image3: String,
    image4: String,
    image5: String,
    image6: String,
   
})

module.exports = mongoose.model("data", data)