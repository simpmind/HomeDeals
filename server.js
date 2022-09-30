const express = require('express');
const path = require('path');
const routes = require('./routes');
const session = require('express-session');
require("dotenv").config();
const exphbs = require("express-handlebars");


const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Inform Express.js on which template engine to use
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
  })
);

app.set('view engine', 'handlebars');

app.use(routes);

const sess = {
  secret: 'Super secret secret',
  cookie: {
    // Make session expire in 50 minutes
    expire: 20 * 60 * 1000
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
module.exports = app;