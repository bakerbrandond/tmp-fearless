const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

//app.use(bodyParser.json());
// serve files from the public directory
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// request to handle undefined or all other routes
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('running server, listening on port ', port)
});
