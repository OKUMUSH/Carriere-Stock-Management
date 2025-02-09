const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
    category: { type: String, required: true, enum: ["Shoes", "Jacket", "Hat", "Gloves"] },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    size: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    lowStockThreshold: { type: Number, required: true, default: 5 }
}, { timestamps: true });

module.exports = mongoose.model("Stock", StockSchema);