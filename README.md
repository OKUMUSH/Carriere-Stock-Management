# Stock Management System

## Overview
A web-based stock management system for tracking inventory levels, alerts, and modifications in real time.

## Features
✅ Real-time low stock alerts (auto-updates colors & warnings)  
✅ Desktop & Mobile-friendly UI (tables on desktop, cards on mobile)  
✅ Live Editing (update stock, auto-refresh UI, save/cancel options)  
✅ AJAX-based operations (add, edit, delete stock without page reload)  
✅ PDF & Excel export, sorting, and printing  
✅ Alphabetical sorting of stock list  
✅ Test page for quick API validation  
✅ **Live preview of offline version**  

## Live Examples
🔗 **[Live Demo (Database Version)](index.ejs)**  
🔗 **[Live Demo (Offline Version)](test.html)**  

## Tech Stack
- **Frontend:** TailwindCSS, jQuery
- **Backend:** Node.js, Express.js, MongoDB (for the database version)
- **Database:** MongoDB with Mongoose ORM (for the database version)
- **Storage:** In-memory JavaScript array (for the offline version)
- **Real-Time Communication:** WebSockets (Socket.io)

## Installation
```sh
# Clone the repository
git clone https://github.com/YOUR_USERNAME/stock-management-system.git
cd stock-management-system

# Install dependencies
npm install

# Start the server
node server.js
```

## Running Tests
To test API functionality, open the test page:
- Start the server
- Open `test.html` in a browser (Offline Mode) or `index.ejs` for the full database version

## API Routes (Database Version)
### Stock Operations
#### Fetch All Stock
```http
GET /stock
```
#### Add Stock
```http
POST /stock
Content-Type: application/json
{
  "itemName": "Apples",
  "quantity": 50,
  "threshold": 10,
  "updatedBy": "Admin"
}
```
#### Update Stock
```http
PUT /update-stock/:id
Content-Type: application/json
{
  "quantity": 30,
  "threshold": 5,
  "updatedBy": "Admin"
}
```
#### Delete Stock
```http
DELETE /delete-stock/:id
```

## License
This project is licensed under the MIT License.
