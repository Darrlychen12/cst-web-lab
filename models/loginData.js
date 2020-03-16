let db = require('../util/database');

// Add a single individual to the database
function getAccount(username, password) {
    return db.query("Select * from accounts WHERE username ='"+ username+"'AND password ='"+password + "'");
}

module.exports = {
    getAccount : getAccount,
}