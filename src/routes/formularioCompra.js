const express = require('express');
const router = express.Router();

/* GET Formulario de Compra page. */
router.get('/', function(req, res, next) {
  res.render('formulario' , { title: 'Formulario de Compra' , user:req.session.user});
});

module.exports = router;
