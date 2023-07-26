//question 1

const http = require('http');

// Sample product data for men and women
const menProducts = [
  { id: 1, name: 'Shirt', category: 'Men', price: 25.99 },
  { id: 2, name: 'Jeans', category: 'Men', price: 39.99 },
  // Add more products here...
];

const womenProducts = [
  { id: 1, name: 'Dress', category: 'Women', price: 29.99 },
  { id: 2, name: 'Skirt', category: 'Women', price: 19.99 },
  // Add more products here...
];

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Men & Women Dummy Data');
  } else if (req.url === '/main') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(menProducts));
  } else if (req.url === '/women') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(womenProducts));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// Start the server
const PORT1 = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

//question 2
const express = require('express');
const app = express();

// Counter variable
let counter = 0;

// Middleware to parse JSON
app.use(express.json());

// API endpoint for getting the current counter data
app.get('/', (req, res) => {
  res.json({ counter });
});

// API endpoint for incrementing the counter by 1
app.post('/increment', (req, res) => {
  counter++;
  res.json({ counter });
});

// API endpoint for decrementing the counter by 1
app.post('/decrement', (req, res) => {
  counter--;
  res.json({ counter });
});

// Start the server
const PORT = 3000;
app.listen(PORT1, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
