const express = require('express');
const router = express.Router();

/* GET Formulario de Compra page. */
router.post('/', function(req, res, next) {
  const name = req.body.name;
  const cantidad = req.body.quantity;
  const precio = cantidad * req.body.price;
  res.render('formulario' , { title: 'Formulario de Compra' , user:req.session.user, quantity:cantidad, event:name, price: precio});
});

module.exports = router;
