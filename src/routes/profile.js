const express = require('express');
const router = express.Router();

/* GET profile page. */
router.get('/', function(req, res, next) {
  res.render('profile' , { title: 'Profile', user:req.session.user });
});

module.exports = router;
