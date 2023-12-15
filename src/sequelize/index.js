const {Sequelize} = require('sequelize');
const bcrypt = require('bcrypt');
const logger = require('../logger');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'sequelize/db.sqlite'
});

const modelDefiners = [
    require('./models/user.model')
    // El resto de modelos
];

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

async function reset(){
    await sequelize.sync({force: true}); // false para que no se reinice la DB
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
        logger.info('La DB ya estaba inicializada');
    }
}

reset();

module.exports = sequelize;