const database = {};

database.user = require('./models/user.model');
database.event = require('./models/event.model');

function initializeUsers(){
    const NAMES = ["carlos", "juan pablo", "miguel", "ana"];
    NAMES.forEach(function(username){
        database.user.register(username, "12345", "name", "123456", "apellido");
    });
}

function initializeEvents(){
    const NAMES = ["a", "b", "c", "d"];
    NAMES.forEach(function(name){
        database.event.register(name, 20, "Un evento", null);
    });
}

function initializeDB(){
    initializeUsers();
    initializeEvents();
}

initializeDB();

module.exports = database;