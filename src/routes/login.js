const express = require('express');
const router = express.Router();
const database = require('../database');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', user:req.session.user});
});

router.post('/', async (req, res) => {
  const user = req.body.user;
  if(await database.user.isLoginRight(user, req.body.pass)){
    req.session.user = {username: user};
    req.session.message = "¡Login correcto!"
    res.redirect("/");
  } else {
    req.session.error = "Incorrect username or password.";
    res.redirect("login");
  }
});
module.exports = router;
