const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

/* GET clubs page. */
router.get('/', async function(req, res, next) {
  try {
    const events = await sequelize.models.event.findAll({where: {category: 'concert'}});
    let eventsArray = [];
    events.forEach((event)=> {
      eventsArray.push(event);
      console.log(JSON.stringify(event));
    });
    res.render('clubs' , { title: 'Clubs', 
                          user:req.session.user,
                          events: eventsArray
                        });
  } catch (error) {
    req.session.error= "Error al buscar los eventos";
    res.redirect("/");
  }
  
});

module.exports = router;
