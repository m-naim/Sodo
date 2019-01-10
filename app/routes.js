var Todo = require('./models/todo');
const express = require('express');
const todoRoutes = express.Router();

todoRoutes.route('/add').post(function (req, res) {
    let todo = new Todo(req.body);
    todo.save()
      .then(todo => {
        res.status(200).json({'todo': 'todo in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });

  // Defined get data(index or listing) route
todoRoutes.route('/').get(function (req, res) {
    Todo.find(function(err, actions){
    if(err){
      console.log(err);
    }
    else {
      res.json(actions);
    }
  });
});


module.exports = todoRoutes;