const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{type: String, required:true, unique:true},
        desc:{type: String, required:true},
        categories:{type: Array},
        size:{type: String},
        colors:{type: String},
        price:{type: Number, required:true},
    },{timestamps: true});

module.exports = mongoose.model("Products", ProductSchema);