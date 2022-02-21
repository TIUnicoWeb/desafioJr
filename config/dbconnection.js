var mysql = require('mysql');

var connsql = function() {
			return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : '1234',
			database : 'portal_noticias'
		});
}
module.exports = function () { 
	console.log('O autoload carregou o módulo de conexão com o banco de dados')
	return connsql;
}