const express = require('express');
const router = express.Router();

/* GET clubs page. */
router.get('/', function(req, res, next) {
  res.render('clubs' , { title: 'Clubs' });
});

module.exports = router;
