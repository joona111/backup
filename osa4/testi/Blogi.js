const mongoose = require("mongoose")

const blogitSchema = new mongoose.Schema({
    name: String,
    age : Number
})



module.exports = mongoose.model("Blogi",blogitSchema)