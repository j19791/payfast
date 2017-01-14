var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var morgan = require('morgan'); //intercepta as requisições express e as deixa disponivel
var logger = require('../servicos/logger.js');

module.exports = function(){
  var app = express();

//:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]  

  app.use(morgan("common", { //middleware q integra com express - common - formato do log padrão no nível comum segundo o Padrão da Apach
        stream: {
          write: function(message){
            logger.info(message)
          }
        }
      }));

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use(expressValidator());

  consign()
   .include('controllers')
   .then('persistencia')
   .then('servicos')
   .into(app);

  return app;
}
