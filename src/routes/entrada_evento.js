const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

/* POST Ticket page. */
router.post('/', async function(req, res, next) {
  try {
    const name = req.body.name;
    const event = await sequelize.models.event.findOne({where: {name: name}});
    res.render('entrada_evento' , { title: 'Entrada Evento' , user: req.session.user,
                                    name: event.name,
                                    description: event.description,
                                    price: event.price,
                                    image: event.image
                                  });
  } catch (error) {
    req.session.error= "Error al buscar el evento";
    res.redirect("/");
  }
});

module.exports = router;
