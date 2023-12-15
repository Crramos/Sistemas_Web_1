const express = require('express');
const router = express.Router();

/* GET Ticket page. */
router.get('/', function(req, res, next) {
  res.render('entrada_evento' , { title: 'Entrada Evento' , user:req.session.user});
});

module.exports = router;
