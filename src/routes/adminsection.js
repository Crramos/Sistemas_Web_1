const express = require('express');
const router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('adminsection' , { title: 'Admin Section' , user:req.session.user});
});

module.exports = router;
