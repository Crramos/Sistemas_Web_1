const express = require('express');
const router = express.Router();

/* GET editProfile page. */
router.get('/', function(req, res, next) {
  res.render('perfil_usuario_editable' , { title: 'Edit Profile' , user:req.session.user});
});

module.exports = router;
