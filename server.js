const express= require('express');

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

var port = process.env.PORT || 8080; 				// set the port
app.listen(port, ()=>{
    console.log('server runing on port n:'+port);
});