const express = require('express');
const router = express.Router();

/* GET concerts page. */
router.get('/', function(req, res, next) {
  res.render('concerts' , { title: 'Concerts' });
});

module.exports = router;
