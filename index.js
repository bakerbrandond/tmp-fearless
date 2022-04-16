const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world');
});

// request to handle undefined or all other routes
app.get('*', (req, res) => {
  res.send('Hello world');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('running server, listening on port ', port)
});
