const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/otherevents', function(req, res, next) {
  res.render('otherevents' /*, { title: 'Express' }*/);
});

module.exports = router;