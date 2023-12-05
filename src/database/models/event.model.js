events = {};

events.data = {};

events.register = function(name, price, description, image){
    if(events.data.hasOwnProperty(name)){
        throw new Error(`Ya existe el evento ${name}.`);
    }
    events.data[name] = {name, price, description, image};
}

module.exports = events;