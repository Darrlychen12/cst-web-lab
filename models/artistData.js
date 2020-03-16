let db = require('../util/database');

// Add a single individual to the database
function addArtist(name, about, image) {
    let sql = "Insert into artists (name, about, imageURL) values ('" + name+ "','"+ about+ "','" + imageURL + "')";
    db.query(sql);
}

// Gets all the individuals in the database
function getAllArtists() {
    return db.query('Select * from artists');
}

// Gets a specific individual from the database
function deleteArtist(name, about, image) {
    return db.query("DELETE FROM artists WHERE name = '" + name + "' AND about = '" + about + "' AND imageURL = '" + image + "'");
}

module.exports = {
    add : addArtist,
    getall : getAllArtists,
    delete: deleteArtist 
}