//executar memcached - memcached -vv

var memcached = require('memcached');

module.exports = function(){
	return createMemcachedClient;
}

function createMemcachedClient(){


    var client = new memcached('localhost:11211',//url onde o Memcached está rodando
              {
                retries:10,//o número de retentativas feitas por request
                retry:10000,//o tempo entre a falha de um servidor e uma tentativa de colocá-lo de volta em serviço
                remove:true// autoriza a remoção automática de servidores mortos do pool.
              });

    return client;
}
    //consultar se uma chave está no cache:
   /* client.get('pagamento-' + 3, //chave que se quer consultar
	    function (err, data) { //data é quem armazena o valor encontrado no cache

	      if (err || !data){
	          console.log('MISS - chave não encontrada no cache');
	      } else {
	          console.log('HIT - valor:' + JSON.stringify(data)); //a chave de fato está presente,
	      }
	    });

	 //inserir uma nova chave no cache
	client.set('pagamento-3', {'id':'3'}, 100000, function (err) {
       console.log('nova chave: pagamento-3');
     });*/