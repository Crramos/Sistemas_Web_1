const bcrypt = require('bcrypt');

users = {};

users.data = {};

users.comparePass = async function(password, hash){
    return await bcrypt.compare(password, hash);
}

users.generateHash = function(password) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                reject(err); 
            } else {
                resolve(hash);
            }
        });
    });
};

users.register = async function(email, password, name, phone, lastName){
    if(users.data.hasOwnProperty(email)){
        throw new Error(`Ya está enlazado al email: ${email}`);
    }
    try {
        const hash = await users.generateHash(password);
        users.data[email] = {
            user: email,
            pass: hash,
            phone: phone,
            name: name,
            lastName: lastName,
            lastLogin: new Date().toISOString() };
        return true;
    } catch (error) {
        throw new Error(`Error al generar el hash de ${email}: ${error.message}`);
    }
};


users.isLoginRight = async function(username, password){
    if(!users.data.hasOwnProperty(username)){
        return false;
    }
    return await users.comparePass(password, users.data[username].pass);
}

users.getName = async function(username){
    return users.data[username];
}

users.getLastName = async function(username){
    return users.data[username];
}

users.getPhone = async function(username){
    return users.data[username];
}

module.exports = users;