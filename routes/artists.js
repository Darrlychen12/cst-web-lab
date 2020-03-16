const express = require('express');
const ArtistController = require('../controllers/artist');
const router = express.Router();

router.get('/artists', ArtistController.getAllArtists);

router.post('/artist/add', ArtistController.addArtist);

router.post('/artist/delete', ArtistController.deleteArtist)

module.exports = router;
