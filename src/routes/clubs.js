const express = require('express');
const router = express.Router();
const sequelize = require('../sequelize');

/* GET clubs page. */
router.get('/', async function(req, res, next) {
  try {
    const events = await sequelize.models.event.findAll({where: {category: 'concert'}});
    let list = JSON.parse(JSON.stringify(events));
    console.log(JSON.stringify(list));
    let eventsArray = [];
    let records = events.map(event => events.dataValues);
    console.log(events.dataValues);
    events.forEach((event)=> {
      eventsArray.push(event);
      console.log(JSON.stringify(event));
    });
    if (events){
      console.log ("Ha funcionado---------------");
    }
    console.log(JSON.stringify(events));
    res.render('clubs' , { title: 'Clubs', 
                          user:req.session.user,
                          events: eventsArray
                        });
    console.log('------------------');
  } catch (error) {
    req.session.error= "Error al buscar los eventos";
    res.redirect("/");
  }
  
});

module.exports = router;
