const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title:{type: String, required:true, unique:true},
        desc:{type: String, required:true},
        img:{type: String, required: true},
        pricePerWeight:{type: String, required: true},
        categories:{type: String, required: true},
        isExotic:{type: Boolean, default: false},
        isBestSeller:{type: Boolean, default: false},
        isStoreChoice:{type: Boolean, default: false},
        isSeason:{type: Boolean, default: false},
        price:{type: Number, required:true}
    },
    );

module.exports = mongoose.model("Products", ProductSchema);