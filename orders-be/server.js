const express = require('express');
const app = express();
app.get('/api/orders', (req, res) => res.json({ orderId: "ORD-9921", status: "Shipped", items: [1] }));
app.listen(5003, () => console.log('Orders API running on port 5003'));
