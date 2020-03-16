let artistModel = require('../models/artistData');

exports.getAllArtists = (req,res,next) => {
   let Artists = artistModel.getall();
   Artists.then((data) => {
        return res.json(data[0])
   }).catch((error) =>{
       if(error) throw error;
      
   })
   
};

exports.addArtist = (req,res,next) => {
    let name = req.body.name;
    let about = req.body.about;
    let image = req.body.url;

    let artist = artistModel.add(name, about, image);
    artist.then((data)=>{
        res.redirect("/");
    }).catch((error) =>{
        if(error) throw error;
    })
};

exports.deleteArtist = (req,res,next) => {
    let name = req.body.name;
    let about = req.body.about;
    let image = req.body.url;

    let artist = artistModel.delete(name, about, image);
    artist.then((data)=>{
        res.redirect("/");
    }).catch((error) =>{
        if(error) throw error;
    })
}
