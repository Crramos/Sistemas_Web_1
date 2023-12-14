const express = require('express');
const router = express.Router();
const database = require('../database');

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register' , { title: 'Register', user:req.session.user});
});

router.post('/', async (req, res) => {
  if (req.body.password != req.body.passwordC) {
    req.session.error = "Las contraseñas no coinciden";
    return res.redirect("register");
  }else{
    const name = req.body.name;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    try{
      await database.user.register(email, req.body.password, name, phone, lastName)
      req.session.message = "¡Registro correcto!"
      res.redirect("login");
    }catch(error){
      req.session.error = error.message;
      res.redirect("register");
    }
}
});

module.exports = router;
