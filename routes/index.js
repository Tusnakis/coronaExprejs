var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    page: 'Home'
  });
});

/* GET page1 page. */
router.get('/page1', function(req, res, next) {
  res.render('page1', {
    page: 'Page1'
  });
});

/* GET page2 page. */
router.get('/page2', function(req, res, next) {
  res.render('page2', {
    page: 'Page2'
  });
});

/* GET page3 page. */
router.get('/page3', function(req, res, next) {
  res.render('page3', {
    page: 'Page3'
  });
});

/* GET page4 page. */
router.get('/page4', function(req, res, next) {
  res.render('page4', {
    page: 'Page4'
  });
});

module.exports = router;
