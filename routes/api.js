var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var feedbackData = require('../data/feedback.json'); //feedback array of objects

router.get('/api', function(req, res) {
  res.json(feedbackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res) {
  feedbackData.unshift(req.body); //get form data from file header, unshift - appends to top of array
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) { //append new data to feedback.json (inside data folder)
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData); //respond with new feedbackData
});


router.delete('/api/:id', function(req, res) {
  feedbackData.splice(req.params.id, 1);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);
    }
  });
  res.json(feedbackData);
});



module.exports = router;
