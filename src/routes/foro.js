const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('foro' , { title: 'Foro' , user: req.session.user});
});

module.exports = router;
