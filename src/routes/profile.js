const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/profile', function(req, res, next) {
  res.render('perfil_usuario' /*, { title: 'Express' }*/);
});

module.exports = router;
