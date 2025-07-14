const express = require('express');
const app = express();

app.get('/hi', (req, res) => {
  res.send('hi');
});

app.listen(4000, '0.0.0.0');