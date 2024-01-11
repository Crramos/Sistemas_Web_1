const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index' , {user: req.session.user, title: 'Home' });
});

router.post('/', function(req, res, next) {
  const tickets = req.body.quantity;
  req.session.message = "¡Ha comprado "+tickets+ " entrada(s)!"
  res.redirect("/");
});

module.exports = router;
