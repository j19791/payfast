var winston = require('winston');
var fs = require('fs');

		//cria pasta logs se ela nao existe
      if (!fs.existsSync("logs")){
        fs.mkdirSync("logs");
      }

module.exports = new winston.Logger({ 
      transports: [ //Cada camada é representada por um transport - é possível ter várias camadas.
        new winston.transports.File({ //escrito em arquivo
          level: "info",
          filename: "logs/payfast.log",
          maxsize: 1048576,//o tamanho máximo a que pode chegar o arquivo de log, para que comece a ser rotacionado
          maxFiles: 10,//quantidade máxima de arquivos que devem ser mantidos
          colorize: false
        })
      ]
    });

