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

module.exports = router;
