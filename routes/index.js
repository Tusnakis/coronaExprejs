var express = require('express');
var request = require("request");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    page: 'Home'
  });
});

/* GET contagios page. */
router.get('/contagios', function(req, res, next) {
  var url = 'https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_casos_long.csv';
  var comunidadesArr = ["Andalucía", "Aragón", "Asturias", "Baleares", "Canarias", "Cantabria", "Castilla-La Mancha", "Castilla y León", "Cataluña", "Ceuta", "C. Valenciana", "Extremadura", "Galicia", "Madrid", "Melilla", "Murcia", "Navarra", "País Vasco", "La Rioja"];
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {

        var coronaArr = body.split("\n");
        var camposCoronaArr = [];

        for (var i = 0; i < coronaArr.length; i++) {
            camposCoronaArr[i] = coronaArr[i].split(",");
        }

        res.render('contagios', {
          page:'Contagios',
          tituloCasos:'Contagios'
          ,casos:camposCoronaArr,
          comunidades:comunidadesArr
        });
    }
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
