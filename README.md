# Carriere Stock Management System

## 🚀 Live Demo
[🔗 Live Example](https://cuddly-space-enigma-97jg7pwpqxwjhxj49-5050.app.github.dev/)

## 📖 About the Project
Carriere Stock Management System is a web-based inventory tracking solution for managing shoes and other warehouse items efficiently. It provides real-time stock tracking, low-stock alerts, and export features.

## 🛠 Features
- 📦 **Stock Management**: Add, edit, and delete inventory items.
- 📉 **Low Stock Alerts**: Automatically highlights items below the threshold.
- 📑 **Export Options**: Download stock reports in **PDF** or **Excel** format.
- 🔍 **Sorting & Searching**: Sort and filter items easily.
- 🖨 **Print Reports**: Print stock lists directly from the interface.
- 📊 **Real-time Updates**: Live tracking of stock changes.

## 📋 Installation
### 1️⃣ Clone the repository
```sh
git clone https://github.com/OKUMUSH/Carriere-Stock-Management.git
cd Carriere-Stock-Management
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up MongoDB
Ensure MongoDB is installed and running on **localhost:27017**. If using a remote database, update the connection string in `.env`.

### 4️⃣ Start the server
```sh
npm run dev
```

The app will be available at `http://localhost:5050`.

## 🛠 Technologies Used
- **Node.js** + **Express.js** (Backend)
- **MongoDB** + **Mongoose** (Database)
- **EJS** (Templating Engine)
- **Tailwind CSS** (Styling)
- **jQuery** (AJAX & DOM Manipulation)
- **jsPDF & xlsx.js** (PDF & Excel Exporting)

## 📌 API Routes
| Route | Method | Description |
|--------|--------|----------------|
| `/stock/add` | `POST` | Add a new stock item |
| `/stock/update/:id` | `PUT` | Update stock details |
| `/stock/delete/:id` | `POST` | Delete a stock item |
| `/stock/list` | `GET` | Retrieve all stock items |

## 📜 License
This project is licensed under the **MIT License**. Feel free to contribute and improve!

---
### 🛠 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 🖥️ **How to Use?**

1️⃣ **Add New Stock**: Enter category, brand, model, size, and stock count.

2️⃣ **Edit Existing Stock**: Modify stock details without page reload.

3️⃣ **Delete Stock**: Remove items from inventory with confirmation.

4️⃣ **Monitor Low Stock**: Items below threshold appear in a separate table.

5️⃣ **Download Reports**: Export inventory data as **Excel or PDF**.

6️⃣ **Print Reports**: Cleanly formatted reports for easy printing.
For questions or feature requests, feel free to reach out!

---
📌 **Author**: OKUMUSH

✉ **Contact**: [GitHub](https://github.com/OKUMUSH)

