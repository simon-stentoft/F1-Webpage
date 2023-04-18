const express = require('express');
const app = express();

app.get('/api/drivers', (req, res) => {
    res.sendFile(__dirname + '/data/first_three_drivers.json');
  });

  app.listen(3002, () => {
    console.log('Server listening on port 3002');
  });

