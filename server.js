const auth = require('./config/passport'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  express = require('express');

var expressSession = require('express-session');
const mongoose = require('mongoose'),
  mongo = require('mongodb').MongoClient;

var passport = require('passport');
const path = require("path"),
  routes = require('./app/routes.js');

require('dotenv').config();



//database init
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
}).
then(
  () =>
  console.log('Database is connected'),
  err =>
  console.log('Can not connect to the database' + err)

);


let app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//session init
var session = expressSession({
  secret: '60dd06aa-cf8e-4cf8-8925-6de720015ebf',
  resave: false,
  saveUninitialized: false,
  name: 'sid'
});

app.use(session);
app.use(passport.initialize());
app.use(passport.session());

mongo.connect(process.env.DATABASE_URL, (err, db) => {
  if (err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');

    auth(passport, db);
    app.use('/', routes);

    if (process.env.node_env === 'production') {
      app.use(express.static(path.join(__dirname, "client", "build")))
      app.get("*", (req, res) => {
        console.log('port: ' + process.env.PORT);
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
      });
    }

    app.listen(process.env.PORT || 8080, () => {
      console.log("Listening on port " + process.env.PORT);
    });
  }
});