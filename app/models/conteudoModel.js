module.exports = function(){

    this.getConteudo = function (connection, callback){
        connection.query("SELECT * FROM conteudo", callback);
    }

    this.getConteudoFrontend = function (connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'frontend'", callback);
    }

    this.getConteudoBackend = function(connection, callback){
        connection.query("SELECT * FROM conteudo WHERE categoria = 'backend'", callback);
    }

    this.salvarConteudo = function(conteudo, connection, callback){
        connection.query('insert into conteudo set ?', conteudo);
    }

    return this;

}

