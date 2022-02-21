const { format } = require("mysql");

module.exports = function(app){
    app.get('/formulario_inclusao_noticia', function(req,res){
        app.app.controllers.admin.formulario_inclusao_noticia(app,req,res)
    });

    app.post('/formulario_inclusao_noticia', function(req,res){
        app.app.controllers.admin.noticias_salvar(app,req,res)
    });
}