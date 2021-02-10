
module.exports = function (app){
    
    app.get('/frontend', function(req, res){

        var connection = app.app.config.database();

        
        var query = app.app.models.conteudoModel;
        query.getConteudoFrontend(connection,
            function(error, results, fields){
            console.log(error,results)
            res.render('paginas/frontend' , {dados:results});
        });
        
                      
    });
}





// codigo antes do consign

// var db = require('../config/database')

// module.exports = function (app){
//     var connection = db();

//     app.get('/frontend', function(req, res){
//         var query = connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'",
//             function(error, results, fields){
//             console.log(error,results)
//             res.render('paginas/frontend' , {dados:results});
//         });
        
//         query.on('error' , function(error){
//             console.log("[mysql error:]",error);
//         });
               
//     });
// }