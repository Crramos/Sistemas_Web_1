const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/compra', function(req, res, next) {
  res.render('formulario' /*, { title: 'Express' }*/);
});

module.exports = router;
