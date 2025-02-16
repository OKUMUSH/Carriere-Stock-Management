// server.js (Stock Management System with History & Undo)

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const moment = require('moment');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);

const StockSchema = new mongoose.Schema({
    itemName: String,
    quantity: Number,
    threshold: Number,
    lastUpdated: { type: Date, default: Date.now },
    updatedBy: String,
});

const StockHistorySchema = new mongoose.Schema({
    itemId: mongoose.Schema.Types.ObjectId,
    itemName: String,
    change: String,
    changedBy: String,
    timestamp: { type: Date, default: Date.now }
});

const Stock = mongoose.model('Stock', StockSchema);
const StockHistory = mongoose.model('StockHistory', StockHistorySchema);

// Auto-remove logs older than 6 months
setInterval(async () => {
    const sixMonthsAgo = moment().subtract(6, 'months').toDate();
    await StockHistory.deleteMany({ timestamp: { $lt: sixMonthsAgo } });
}, 24 * 60 * 60 * 1000); // Runs daily

// Routes
app.get('/', async (req, res) => {
    const stocks = await Stock.find();
    const history = await StockHistory.find().sort({ timestamp: -1 });
    res.render('index', { stocks, history });
});

app.post('/stock', async (req, res) => {
    const { itemName, quantity, threshold, updatedBy } = req.body;
    const stock = new Stock({ itemName, quantity, threshold, updatedBy });
    await stock.save();

    const history = new StockHistory({
        itemId: stock._id,
        itemName: itemName,
        change: `Added new stock with quantity ${quantity} and threshold ${threshold}`,
        changedBy: updatedBy,
    });
    await history.save();

    io.emit('stock_updated', stock);
    res.redirect('/');
});

app.post('/update-stock/:id', async (req, res) => {
    const { quantity, threshold, updatedBy } = req.body;
    const stock = await Stock.findById(req.params.id);
    if (stock) {
        const oldQuantity = stock.quantity;
        const oldThreshold = stock.threshold;
        stock.quantity = quantity;
        stock.threshold = threshold;
        stock.updatedBy = updatedBy;
        await stock.save();
        
        const history = new StockHistory({
            itemId: stock._id,
            itemName: stock.itemName,
            change: `Updated quantity from ${oldQuantity} to ${quantity}, threshold from ${oldThreshold} to ${threshold}`,
            changedBy: updatedBy,
        });
        await history.save();
        
        io.emit('stock_updated', stock);
    }
    res.redirect('/');
});

app.post('/delete-stock/:id', async (req, res) => {
    await Stock.findByIdAndDelete(req.params.id);
    io.emit('stock_deleted', req.params.id);
    res.redirect('/');
});

// Get stock history
app.get('/history', async (req, res) => {
    const history = await StockHistory.find().sort({ timestamp: -1 });
    res.json(history);
});

// Manual delete history
app.post('/delete-history/:id', async (req, res) => {
    await StockHistory.deleteOne({ _id: req.params.id });
    res.redirect('/');
});

// WebSocket Connection
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));