const express = require('express');
const app = express();
app.get('/api/auth', (req, res) => res.json({ status: "Authenticated", user: "Sai Dutt", role: "Developer" }));
app.listen(5001, () => console.log('Auth API running on port 5001'));
