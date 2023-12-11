const express = require('express');
const router = express.Router();
const database = require('../database');

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register' , { title: 'Register', user:req.session.user});
});

router.post('/', async (req, res) => {
  if (!req.body.isValid) {
    // Si el formulario no es válido, redirige de vuelta al formulario de registro
    req.session.error = "Las contraseñas no coinciden";
    return res.redirect("register");
}
  const user = req.body.name;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  try{
      await database.user.register(email, req.body.password, user, phone, lastName)
      req.session.message = "¡Registro correcto!"
      res.redirect("login");
  }catch(error){
      req.session.error = error.message;
      res.redirect("register");
    }
});

module.exports = router;
