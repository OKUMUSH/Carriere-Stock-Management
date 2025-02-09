const express = require("express");
const router = express.Router();
const Stock = require("../models/Stock");

// 📌 Stokları Listele
router.get("/", async (req, res) => {
    try {
        const stocks = await Stock.find();
        res.render("index", { stocks });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 Yeni Stok Ekle
router.post("/add", async (req, res) => {
    try {
        const { category, brand, model, size, stock, lowStockThreshold } = req.body;
        const newStock = new Stock({ category, brand, model, size, stock, lowStockThreshold });
        await newStock.save(); // ✅ MongoDB'ye kaydet
        res.json({ message: "✅ Stock item added successfully!" });
    } catch (err) {
        console.error("❌ Error adding stock:", err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;

// 📌 Stok Güncelle
router.put("/update/:id", async (req, res) => {
    try {
        console.log("🔍 Incoming Data:", req.body);

        let stock = await Stock.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!stock) return res.status(404).json({ message: "❌ Stock not found!" });

        res.json({ message: "✅ Stock updated successfully!", stock });
    } catch (error) {
        res.status(500).json({ message: "❌ Error updating stock", error });
    }
});

module.exports = router;

// 📌 Stok Silme Route'u (POST ile dene)
router.post("/delete/:id", async (req, res) => {
    try {
        const stockItem = await Stock.findByIdAndDelete(req.params.id);
        if (!stockItem) {
            return res.status(404).json({ message: "❌ Stock item not found." });
        }

        res.json({ message: "✅ Stock item deleted successfully!" });
    } catch (err) {
        console.error("❌ Error deleting stock:", err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;