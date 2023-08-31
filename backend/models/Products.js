const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{type: String, required:true, unique:true},
        desc:{type: String, required:true},
        img:{type: String, required: true},
        categories:{type: Array},
        size:{type: Array},
        colors:{type: Array},
        price:{type: Number, required:true},
        availability: {type:Boolean, default: true}
    },
    {timestamps: true});

module.exports = mongoose.model("Products", ProductSchema);