module.exports=function(app){//exportação do app
//rota para a pagina principal index
app.get('/', function(req,res){//endereço '/'
	res.render('home/index.ejs');//renderização da tela index.js
});
}