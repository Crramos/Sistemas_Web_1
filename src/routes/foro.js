const express = require('express');
const router = express.Router();
const messages = [];

router.get('/', function(req, res, next) {
  res.render('foro' , { title: 'Foro' , user: req.session.user, messages: messages});
});

module.exports = router;
