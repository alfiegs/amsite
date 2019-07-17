let express = require('express');
let router = express.Router();
let data = require('../data/data.json') //data avriable equals whole json object

router.get('', (req, res) => {
    res.render('index')
})

module.exports = router
