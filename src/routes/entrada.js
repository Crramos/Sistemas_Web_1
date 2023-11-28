const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/entrada', function(req, res, next) {
  res.render('entrada_evento' /*, { title: 'Express' }*/);
});

module.exports = router;
