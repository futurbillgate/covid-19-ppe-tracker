var express = require('express');
var router = express.Router();
var models = require('../models');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/ppe/create', function (req, res, next) {
  res.render('create-ppe');
});

router.post('/ppe', function (req, res, next) {
  if (req.body.mode === 'availability') {
    models.Availability.create({
      name: req.body.name,
      itemType: req.body.itemType,
      quantity: req.body.quantity,
      email: req.body.email,
      contact: req.body.contact,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    }).then(function () {
      res.redirect('/ppe/create');
    });
  }
  else if (req.body.mode === 'requirement') {
    models.Requirement.create({
      name: req.body.name,
      itemType: req.body.itemType,
      quantity: req.body.quantity,
      email: req.body.email,
      contact: req.body.contact,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
    }).then(function () {
      res.redirect('/ppe/create');
    });
  }

})

module.exports = router;
