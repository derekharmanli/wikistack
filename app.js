const express = require('express');
const app = express();

const morgan = require('morgan');
const path = require('path');
const layout = require('./views/layout');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');
const { db, Page, User } = require('./models/');

db.authenticate().then(() => {
  console.log('connected to the database');
});

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wikiRouter);

app.get('/', (req, res, next) => {
  res.send(layout('TERRENCE'));
});

const init = async () => {
  const PORT = 3000;

  await db.sync({ force: true });

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
