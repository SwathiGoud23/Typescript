"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Create operation
app.post('/data', (req, res) => {
    const newItem = req.body; // Cast req.body to Item type
    data_1.data.push(newItem);
    res.status(201).json(newItem);
});
// Read operation (get all data)
app.get('/', (req, res) => {
    res.json(data_1.data);
});
// Read operation (get a specific item by ID)
app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const item = data_1.data.find(item => item.id.toString() === id);
    if (item) {
        res.json(item);
    }
    else {
        res.status(404).json({ message: 'Item not found' });
    }
});
// Update operation
app.put('/data/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedItem = req.body;
    const index = data_1.data.findIndex(item => item.id === id);
    if (index !== -1) {
        data_1.data[index] = updatedItem;
        res.json(updatedItem);
    }
    else {
        res.status(404).json({ message: 'Item not found' });
    }
});
// Delete operation
app.delete('/data/:id', (req, res) => {
    const id = req.params.id;
    const index = data_1.data.findIndex(item => item.id.toString() === id);
    if (index !== -1) {
        const deletedItem = data_1.data.splice(index, 1)[0];
        res.json(deletedItem);
    }
    else {
        res.status(404).json({ message: 'Item not found' });
    }
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on PORT ${port}`));
