const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

/* GET profile page. */
router.get('/', async function(req, res, next) {
  const email = req.session.user.username
  try {
    const user = await sequelize.models.user.findOne({ where:{email: email}});
    if (user) {
        const name = user.name;
        const lastName = user.lastName;
        const phone = user.phone;
        res.render('profile' , { title: 'Profile', user: req.session.user, email, phone, name, lastName});
    } else {
        req.session.error = "Usuario no encontrado.";
        res.redirect("/");
    }
} catch (error) {
    req.session.error= "Error al buscar el usuario:";
    res.redirect("/");
}
});

module.exports = router;
