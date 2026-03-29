const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001; 


// Demo data
let menu = [
  { id: "1", name: 'Cappuccino', price: 150, category: 'Coffee', description: 'Classic coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93' },
  { id: "2", name: 'Espresso', price: 120, category: 'Coffee', description: 'Strong coffee', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348' },
  { id: "3", name: 'Sandwich', price: 100, category: 'Snacks', description: 'Tasty snack', image: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d' },
  { id: "3", name: 'Latte', price: 250, category: 'Coffee', description: 'Sweet', image: 'url' },
  { id: "3", name: 'Muffin', price: 100, category: 'Snacks', description: 'Tasty snack', image: 'url' },
];

let orders = [];

// API endpoints
app.get('/api/menu', (req, res) => res.json(menu));
app.post('/api/orders', (req, res) => {
  console.log("Incoming order: ", req.body);
  const order = req.body;
  orders.push(order);
  res.json({ message: 'Order received!', order });
});
app.get('/api/orders', (req, res) => res.json(orders));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
