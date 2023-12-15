const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');
const bcrypt = require('bcrypt');

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register' , { title: 'Register', user:req.session.user});
});

router.post('/', async (req, res) => {
  const name = req.body.name;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  if (req.body.password!= req.body.passwordC) {
    req.session.error = "Las contraseñas no coinciden";
    return res.redirect("register");
  }else{
    const password = await bcrypt.hash(req.body.password, 10);
    const user = await sequelize.models.user.findOne({where: {email}});
    if(!user){
      const newUser = await sequelize.models.user.create({email, password, phone, name, lastName});
      req.session.message = "¡Registro correcto!"
      res.redirect("login");
    }else{
      req.session.error = "El correo ya está en uso";
      res.redirect("register");
    }
}
});

module.exports = router;
