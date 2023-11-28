const database = {};

database.user = require('./models/user.model');

function initializeUsers(){
    const NAMES = ["carlos", "ana", "juan", "miguel"];
    NAMES.forEach(function(username){
        database.user.register(username, "root");
    });
}

function initializeDB(){
    initializeUsers();
}

initializeDB();

module.exports = database;