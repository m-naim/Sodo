const listControler = require('./controllers/list.ctrl');
const taskControler = require('./controllers/task.ctrl');
const passport = require('passport');
const express = require('express');
const todoRoutes = express.Router();


//auth routes
todoRoutes.get('/auth/facebook',
  passport.authenticate("facebook", {
    scope: "email"
  }));

todoRoutes.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    var token = req.user._id;
    console.log(token);
    if (process.env.node_env === 'production') {
      res.redirect("/login?token=" + token);
    } else {
      res.redirect("http://localhost:3000/login?token=" + token);
    }
  });


todoRoutes.get('/auth/google',
  passport.authenticate('google', {
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email'
    ]
  }));

todoRoutes.get('/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: '/login'
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    var token = req.user._id;
    console.log(token);
    if (process.env.node_env === 'production') {
      res.redirect("/login?token=" + token);
    } else {
      res.redirect("http://localhost:3000/login?token=" + token);
    }
  });

//lists routes
todoRoutes
  .route('/addlist')
  .post(listControler.newList);

todoRoutes
  .route('/dellist/:id')
  .post(listControler.delList);
// Defined get data(index or listing) route
todoRoutes
  .route('/lists')
  .get(listControler.getAll);

//tasks routes
todoRoutes
  .route('/gettoday')
  .get(taskControler.getToday);
todoRoutes
  .route('/ntask')
  .post(taskControler.new);
todoRoutes
  .route('/taskdone/:task_id')
  .post(taskControler.taskDone);
todoRoutes
  .route('/taskimportance/:task_id')
  .post(taskControler.taskImportance);
todoRoutes
  .route('/deadline')
  .post(taskControler.taskDeadLine);

module.exports = todoRoutes;