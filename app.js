const express = require('express');
const morgan = require('morgan');
const path = require('path');
const layout = require('./views/layout');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.send(layout(' '));
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
