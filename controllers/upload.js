var fs = require('fs'); //fs faz parte do core do node, nao precisa instalar

    module.exports = function(app) { //cria modulo q recebe o objeto do express
        app.post("/upload/imagem",function(req, res) {//rota para receber arquivo

          var arquivo = req.headers.filename; //nome do arquivo encaminhado via header
          console.log('arquivo recebido: ' + arquivo);

          req.pipe(fs.createWriteStream("files/" + arquivo)) //pipe : requisição é a entrada para o createWriteStream q escreve o arquivo em files

            .on('finish', function(){ //qdo o createWriteStream termina, envia alerta finish e o listener on executa uma função de callback
                   console.log('arquivo escrito');
                  res.status(201).send('ok'); //recurso criado
            });
        });
      }