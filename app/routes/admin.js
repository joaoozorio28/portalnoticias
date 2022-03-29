module.exports=function(app){//exportação do app
//rota para a página do formulário de inclusão de noticias
app.get('/formularioinclusaodenoticia', function(req,res){//endereço'/'
	res.render('admin/form_add_noticia.ejs');//renderização do formulário de inclusão de noticias 
});
}