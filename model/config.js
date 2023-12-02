const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/userdata")
.then(()=> console.log("db conneceted"))
.catch((err)=> console.log(err.message))