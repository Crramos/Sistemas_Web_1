const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', user:req.session.user});
});

router.post('/', async (req, res) => {
  const email = req.body.name;
  const user = await sequelize.models.user.findOne({where: {email: email}});
  if(user){
    bcrypt.compare(req.body.password, user.password, function(err, result){
      if (result){// password correcto
        req.session.user = {username: user.email};
        req.session.message = "¡Login correcto!"
        res.redirect("/");
      } else {
        req.session.error = "Incorrect password.";
        res.redirect("/login");
      }
    });
  }else{
    req.session.error = "Incorrect username or password.";
    res.redirect("login");
  }
});

module.exports = router;
