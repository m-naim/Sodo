const listControler = require('./controllers/list.ctrl');
const passport    = require('passport');
const express = require('express');
const todoRoutes = express.Router();


//auth routes
todoRoutes.get('/auth/facebook',
passport.authenticate('facebook'));

todoRoutes.get('/auth/facebook/callback',
passport.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
});
//
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

todoRoutes
          .route('/taskdone')
          .post(listControler.taskDone);


module.exports = todoRoutes;