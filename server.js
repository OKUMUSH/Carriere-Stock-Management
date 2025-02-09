const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // ✅ CORS hatasını önlemek için ekle
const Stock = require("./models/Stock"); // ✅ Stock Modelini Dahil Et

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors()); // ✅ CORS Middleware kullanımı

// 📌 MongoDB Bağlantısı
mongoose
  .connect("mongodb://localhost:27017/shoe-stock", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.log("❌ MongoDB Connection Error:", err));

// 📌 Özel Sıralama Mantığı
app.get("/", async (req, res) => {
    try {
        let stocks = await Stock.find();

        // 📌 Önce kategoriye göre sıralama, sonra brand, sonra model
        stocks.sort((a, b) => {
            // 1️⃣ Kategoriye göre sıralama
            if (a.category !== b.category) {
                return a.category.localeCompare(b.category);
            }

            // 2️⃣ Marka sıralaması (Alfabetik)
            if (a.brand !== b.brand) {
                return a.brand.localeCompare(b.brand);
            }

            // 3️⃣ Model sıralaması (Alfabetik)
            if (a.model !== b.model) {
                return a.model.localeCompare(b.model);
            }

            // 4️⃣ Beden (Size) sıralaması: Harfli olanlar (S, M, L, XL, XXL) özel sıralama, sayılar büyükten küçüğe
            const sizeOrder = ["S", "M", "L", "XL", "XXL"];
            const aSize = a.size.toString();
            const bSize = b.size.toString();

            const aIndex = sizeOrder.indexOf(aSize);
            const bIndex = sizeOrder.indexOf(bSize);

            if (aIndex !== -1 && bIndex !== -1) {
                return aIndex - bIndex; // Harfli beden sıralaması
            }

            if (!isNaN(a.size) && !isNaN(b.size)) {
                return b.size - a.size; // Sayısal beden sıralaması (büyükten küçüğe)
            }

            return aSize.localeCompare(bSize); // Diğer tüm durumlar için alfabetik sıralama
        });

        console.log("📋 Loaded Stocks:", stocks);
        res.render("index", { stocks });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 📌 Stok Yönetim API'sini Kullan
// 📌 Stock Routes Kullanımı
const stockRoutes = require("./routes/stock");
app.use("/stock", stockRoutes);

// 📌 Sunucuyu Başlat
app.listen(5050, () => console.log("🚀 Server is running on port 5050"));