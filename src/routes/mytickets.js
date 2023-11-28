const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/mytickets', function(req, res, next) {
  res.render('mytickets' /*, { title: 'Express' }*/);
});

module.exports = router;
