module.exports.formulario_inclusao_noticia = function (app,req,res){
    res.render("admin/form_add_noticia", {validacao:{},noticia:{}});
}
module.exports.noticias_salvar = function (app, req,res){
    var noticia = req.body;

        req.assert('titulo','Titulo é obrigatório').notEmpty();
        req.assert('resumo','Preencher o Resumo é obrigatório').notEmpty();
        req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10,100);
        req.assert('autor','Autor é obrigatório').notEmpty();
        req.assert('data_noticia','Data não pode estar vazia').notEmpty();
        req.assert('data_noticia','Data é Preencha data corretamente').isDate({format:'YYYY-MM-DD'});
        req.assert('noticia','Digitar a notícia é obrigatório').notEmpty();

        var erros = req.validationErrors();

        if(erros){
            res.render("admin/form_add_noticia", {validacao : erros, noticia : noticia});
            return;
        }

        var connection = app.config.dbconnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvarNoticia(noticia, function(error, result){
            res.redirect('/noticias');
        });
    
}
