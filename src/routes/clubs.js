const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/clubs', function(req, res, next) {
  res.render('clubs' /*, { title: 'Express' }*/);
});

module.exports = router;
