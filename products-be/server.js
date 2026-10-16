const express = require('express');
const app = express();
app.get('/api/products', (req, res) => res.json([
    { id: 1, name: "Docker Mastery Course", price: 0 },
    { id: 2, name: "Kubernetes Guide", price: 29 }
]));
app.listen(5002, () => console.log('Products API running on port 5002'));
