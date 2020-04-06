var express = require('express');
var request = require("request");
var router = express.Router();

router.use(function(req,res,next){
  res.locals.datos = null;
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    page: 'Home'
  });
});

/* ALL casos page. */
router.all('/casos', function (req, res) {
  var datosElegidos = {
    comunidad: req.body.comunidades,
    //eleccion: req.body.eleccion
  }
  var url = 'https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_casos_long.csv';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var coronaArr = body.split("\n");
      var camposCoronaArr = [];

      for (var i = 0; i < coronaArr.length; i++) {
        camposCoronaArr[i] = coronaArr[i].split(",");
      }

      res.render('casos', {
        datos: datosElegidos,
        datosCorona: camposCoronaArr,
        fecha: "2020-02-27",
        page: 'Casos'
      });
    }
  });
});

/* ALL ucis page. */
router.all('/ucis', function (req, res) {
  var datosElegidos = {
    comunidad: req.body.comunidades,
    //eleccion: req.body.eleccion
  }
  var url = 'https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_uci_long.csv';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var coronaArr = body.split("\n");
      var camposCoronaArr = [];

      for (var i = 0; i < coronaArr.length; i++) {
        camposCoronaArr[i] = coronaArr[i].split(",");
      }

      res.render('ucis', {
        datos: datosElegidos,
        datosCorona: camposCoronaArr,
        fecha: "2020-03-04",
        page: 'Ucis'
      });
    }
  });
});

/* ALL altas page. */
router.all('/altas', function (req, res) {
  var datosElegidos = {
    comunidad: req.body.comunidades,
    //eleccion: req.body.eleccion
  }
  var url = 'https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_altas_long.csv';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var coronaArr = body.split("\n");
      var camposCoronaArr = [];

      for (var i = 0; i < coronaArr.length; i++) {
        camposCoronaArr[i] = coronaArr[i].split(",");
      }

      res.render('altas', {
        datos: datosElegidos,
        datosCorona: camposCoronaArr,
        fecha: "2020-03-16",
        page: 'Altas'
      });
    }
  });
});

/* ALL fallecidos page. */
router.all('/fallecidos', function (req, res) {
  var datosElegidos = {
    comunidad: req.body.comunidades,
    //eleccion: req.body.eleccion
  }
  var url = 'https://raw.githubusercontent.com/datadista/datasets/master/COVID%2019/ccaa_covid19_fallecidos_long.csv';
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var coronaArr = body.split("\n");
      var camposCoronaArr = [];

      for (var i = 0; i < coronaArr.length; i++) {
        camposCoronaArr[i] = coronaArr[i].split(",");
      }

      res.render('fallecidos', {
        datos: datosElegidos,
        datosCorona: camposCoronaArr,
        fecha: "2020-03-03",
        page: 'Fallecidos'
      });
    }
  });
});

module.exports = router;
