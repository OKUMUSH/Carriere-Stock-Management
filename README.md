# 🚀 Carriere Stock Management

**Carriere Stock Management** is a web-based inventory management system designed to track and manage the stock of shoes, jackets, hats, and gloves used in Albert Heijn warehouses. The system provides real-time stock monitoring, low-stock alerts, and easy item editing, ensuring efficient warehouse operations.

## 📌 **Features**

✅ **Stock Management** – Add, edit, and delete stock items dynamically
✅ **Live Threshold Alerts** – Get warnings when stock falls below predefined limits.
✅ **Category-Based Sorting** – Items are grouped and sorted by category (Shoes, Jackets, Hats, Gloves).
✅ **Real-Time Editing** – Modify stock details without refreshing the page.
✅ **Excel & PDF Export** – Download inventory reports with detailed insights.
✅ **Print-Friendly Reports** – Optimized report generation for printing.
✅ **Authentication & Authorization** – Role-based access control for safety.

---

## 🔧 **Installation Guide**

### 1️⃣ Clone the Repository
```sh
git clone git@github.com:OKUMUSH/Carriere-Stock-Management.git
cd Carriere-Stock-Management
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5050
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
```

### 4️⃣ Run the Server
```sh
npm start
```

Server will start at **`http://localhost:5050`**

---

## 🖥️ **How to Use?**

1️⃣ **Add New Stock**: Enter category, brand, model, size, and stock count.
2️⃣ **Edit Existing Stock**: Modify stock details without page reload.
3️⃣ **Delete Stock**: Remove items from inventory with confirmation.
4️⃣ **Monitor Low Stock**: Items below threshold appear in a separate table.
5️⃣ **Download Reports**: Export inventory data as **Excel or PDF**.
6️⃣ **Print Reports**: Cleanly formatted reports for easy printing.

---

## 📡 **API Endpoints**

| Method | Endpoint          | Description                  |
|--------|------------------|------------------------------|
| GET    | `/`              | Home page showing inventory |
| GET    | `/stock`         | Fetch all stock items       |
| POST   | `/stock/add`     | Add a new stock item        |
| POST   | `/stock/edit/:id` | Edit an existing item      |
| DELETE | `/stock/delete/:id` | Remove stock item         |

---

## 🖼️ **Screenshots**

### 🔹 **Dashboard**
![Dashboard](https://via.placeholder.com/800x400?text=Dashboard+Screenshot)

### 🔹 **Low Stock Alerts**
![Low Stock](https://via.placeholder.com/800x400?text=Low+Stock+Warning)

---

## 🛠️ **Technologies Used**
- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: EJS, Tailwind CSS, jQuery, AJAX
- **Authentication**: JWT, Express-session
- **Data Export**: XLSX (Excel), jsPDF (PDF)

---

## 📜 **License**
This project is **open-source** and licensed under the **MIT License**.

---

## ✨ **Contributors**
👤 **[OKUMUSH](https://github.com/OKUMUSH)** - Main Developer

👥 **Contributions are welcome!**

---

## ⭐ **Support & Feedback**
💡 Found a bug or have a feature request? Open an issue in the repository!

If you like this project, don’t forget to **🌟 star the repo!** 😊

