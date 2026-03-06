const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.use(express.json());
app.use(express.static('.'));

app.post('/chat', async (req, res) => {
 const res = await fetch('/chat', {
  headers: { 'Content-Type': 'application/json' },
    },
    body: JSON.stringify(req.body)
  });
  const data = await response.json();
  res.json(data);
});

app.listen(3000);
