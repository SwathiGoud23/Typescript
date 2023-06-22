import express, { Request, Response } from "express";
import { data, Item } from './data';

const app = express();

app.use(express.json());

// Create operation
app.post('/data', (req: Request, res: Response) => {
  const newItem: Item = req.body as Item; // Cast req.body to Item type
  data.push(newItem);
  res.status(201).json(newItem);
});

// Read operation (get all data)
app.get('/', (req: Request, res: Response) => {
  res.json(data);
});

// Read operation (get a specific item by ID)
app.get('/data/:id', (req: Request, res: Response) => {
  const id: string = req.params.id;
  const item: Item | undefined = data.find(item => item.id.toString() === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Update operation
app.put('/data/:id', (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id);
  const updatedItem: Item = req.body as Item; 
  const index: number = data.findIndex(item => item.id === id);
  if (index !== -1) {
    data[index] = updatedItem;
    res.json(updatedItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Delete operation
app.delete('/data/:id', (req: Request, res: Response) => {
  const id: string = req.params.id;
  const index: number = data.findIndex(item => item.id.toString() === id);
  if (index !== -1) {
    const deletedItem: Item = data.splice(index, 1)[0];
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on PORT ${port}`));