const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/concerts', function(req, res, next) {
  res.render('concerts' /*, { title: 'Express' }*/);
});

module.exports = router;