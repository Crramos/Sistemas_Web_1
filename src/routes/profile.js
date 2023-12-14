const express = require('express');
const router = express.Router();
const database = require('../database');

/* GET profile page. */
router.get('/', async function(req, res, next) {
  const email = req.session.user;
  const phone = await database.user.getPhone(email);
  const name = await database.user.getName(email);
  const lastName = await database.user.getLastName(email);
  res.render('profile' , { title: 'Profile', user:req.session.user, email, phone, name, lastName});
});

module.exports = router;
