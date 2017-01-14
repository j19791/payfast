var fs = require('fs');

var arquivo = process.argv[2]; //node fileReader.js <nome_do_arquivo>

    fs.readFile(arquivo, function(err, buffer){
      console.log('lendo um arquivo');

      fs.writeFile('arquivo2.txt' , buffer, function(err){
          console.log('escrevendo um arquivo');
      });

    });


