const express = require('express');
const router = express.Router();

/* GET mytickets page. */
router.get('/', function(req, res, next) {
  res.render('mytickets' , { title: 'My Tickets' , user:req.session.user});
});

router.post('/', function(req, res, next) {
  res.render('mytickets' , { title: 'My Tickets' , user:req.session.user});
});

module.exports = router;
