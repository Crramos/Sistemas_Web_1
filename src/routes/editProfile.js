const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/editProfile', function(req, res, next) {
  res.render('perfil_usuario_editable' /*, { title: 'Express' }*/);
});

module.exports = router;
