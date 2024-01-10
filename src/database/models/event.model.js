events = {};

events.data = {};

events.register = function(name, price, description, image, category){
    if(events.data.hasOwnProperty(name)){
        throw new Error(`Ya existe el evento ${name}.`);
    }
    events.data[name] = {name, price, description, image, category};
}

events.getAllEvents = function(){
    return events.data;
}

events.getEvent = function(name){
    return events.data[name];
}

module.exports = events;