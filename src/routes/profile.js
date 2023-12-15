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
        console.log('Usuario no encontrado.');
    }
} catch (error) {
    console.error('Error al buscar el usuario:', error);
}
});

module.exports = router;
