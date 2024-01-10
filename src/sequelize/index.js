const {Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');
const logger = require('../logger');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'sequelize/db.sqlite'
});

const modelDefiners = [
    require('./models/user.model'),
    require('./models/event.model')
    // El resto de modelos
];

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

async function resetUser(){
    const count = await sequelize.models.user.count();
    const users = [
        {email: 'user'},
        {email: 'admin'}
    ];

    if (count == 0){
        for (let index = 0; index < users.length; index++){
            users[index].password = await bcrypt.hash(users[index].email, 10);
            users[index].phone = index;
            users[index].name = users[index].email;
            users[index].lastName = users[index].email;
        }
        await sequelize.models.user.bulkCreate(users);
        logger.info('Creados usuarios iniciales');
    } else {
        logger.info('La DB user ya estaba inicializada');
    }
}

async function resetEvent(){
    const count = await sequelize.models.event.count();
    const events = [
        {name: 'eventoA'},
        {name: 'eventoB'},
        {name: 'eventoC'}
    ];

    if (count == 0){
        for (let index = 0; index < events.length; index++){
            events[index].price = index;
            events[index].description = events[index].name;
            events[index].category = 'concert';
        }
        await sequelize.models.event.bulkCreate(events);
        logger.info('Creados eventos iniciales');
    } else {
        logger.info('La DB event ya estaba inicializada');
    }
}

async function reset(){
    await sequelize.sync({force: true}); // false para que no se reinice la DB
    resetUser();
    resetEvent();
}

reset();

module.exports = sequelize;