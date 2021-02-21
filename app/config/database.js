var mysql = require('mysql');

var connMySQL = function(){
    console.log(" database connection established ");
    return connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'projeto_node'
    });
}

module.exports = function(){
    return connMySQL;    
}


// codigo antes do consign

// var mysql = require('mysql');
// module.exports = function(){
//     return mysql.createConnection({
//         host:'localhost',
//         user:'root',
//         password:'',
//         database:'projeto_node'
//     });
// }