const app=require('./config/server');//importação do módulo server.js
const rotaHome=require('./app/routes/home')(app);//importação e execução do módulo home 
const rotaAdmin=require('./app/routes/admin')(app);//importação e execução do módulo admin
const rotaNoticias=require('./app/routes/noticias')(app);//importação e execução do módulo noticias 


//Cria um servidor rodando na porta 3000
app.listen('3000',function(){
	console.log('Servidor rodando na porta 3000');
});