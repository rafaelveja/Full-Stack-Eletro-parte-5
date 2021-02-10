module.exports = function (app){
    app.get('/loja', function(req, res){
        res.render('paginas/loja');
               
    });
}