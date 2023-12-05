const express = require('express');
const router = express.Router();

/* GET otherevents page. */
router.get('/', function(req, res, next) {
  res.render('otherevents' , { title: 'Other Events' , user:req.session.user});
});

module.exports = router;
