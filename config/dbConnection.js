const mysql=require('mysql');// importando o mysql

module.exports=function(){
	return mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'ifms',
		database:'portal_noticias'
	});//cria a conexão com o banco de dados portal_noticias
}