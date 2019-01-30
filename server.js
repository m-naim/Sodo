const express= require('express');
// ... other imports 
const path = require("path")
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/database.js');
const routes= require('./app/routes.js')

mongoose.Promise = global.Promise;
mongoose.connect(config.remoteUrl, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

let app=express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', ()=>{console.log('hello world');});
app.use('/todo',routes);

if(process.env.NODE_ENV==='production') {
  // ... other app.use middleware 
  app.use(express.static(path.join(__dirname, "client", "build")))
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

var port = process.env.PORT || 8080; 				// set the port
app.listen(port, ()=>{
    console.log('server runing on port n:'+port);
});