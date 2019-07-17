let express = require('express');
let router = express.Router();
let data = require('../data/data.json') //data variable equals whole json object

let albumArt = []

router.get('/albums', (req, res) => {
    data.albums.forEach((album)=>{
        albumArt = albumArt.concat(album.artwork)
    })
    res.render('albums', {
        artwork: albumArt,
        albums: data.albums
    })
})

router.get('/albums/:albumtitle', (req, res) => {
    let pageAlbum = []
    data.albums.forEach((album) => {
        if(album.shortname == req.params.albumtitle){
            pageAlbum.push(album) 
        }
    })

    res.render('albums', {
        pageTitle: pageAlbum[0].albumname,
        albums: pageAlbum
    })
})

module.exports = router