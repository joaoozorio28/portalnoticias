const dbConnection = require('../../config/dbConnection');//importação do dbConnection

module.exports=function(app){//exportação do app

	var connection=dbConnection();

app.get('/noticias',function(req,res){
	
	
	connection.query('select * from noticias', function(error, result){//consulta com o banco de dados
		if(error){
			console.log(error)
		};//resposta do query para o cliente
		res.render('noticias/noticias.ejs', {noticias:result});//renderização da tela noticia.ejs passando pela variável result
	});

	
});
}