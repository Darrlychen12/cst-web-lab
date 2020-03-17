let artistModel = require('../models/artistData');

exports.getAllArtists = (req,res,next) => {
   let Artists = artistModel.getall();
   Artists.then( ([rows, fieldData]) => {
    console.log(rows)
    res.render('home', { people: rows, style: true });
});

   
};

exports.addArtist = (req,res,next) => {
    console.log(req.body)
    let name = req.body.name;
    let about = req.body.info;
    let image = req.body.url;

    artistModel.add(name, about, image);
    res.redirect("/");

};

exports.deleteArtist = (req,res,next) => {
    let name = req.body.name;
    let about = req.body.info;
    let image = req.body.url;

    artistModel.delete(name, about, image);
    res.redirect("/")
}
