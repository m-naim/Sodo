const listControler = require('./controllers/list.ctrl');

const express = require('express');
const todoRoutes = express.Router();

todoRoutes
          .route('/addlist')
          .post(listControler.newList);
todoRoutes
          .route('/addtask')
          .post(listControler.addTask);

todoRoutes
          .route('/dellist/:id')
          .post(listControler.delList);
          
  // Defined get data(index or listing) route
todoRoutes
          .route('/lists')
          .get(listControler.getAll);


module.exports = todoRoutes;