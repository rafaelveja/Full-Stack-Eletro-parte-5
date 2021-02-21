const {model} = require('mongoose')
const app = require('./app/config/server');
const connection = require('./app/config/connection')
const Schema = require('./app/models/Produtos')
const Produtos = model("produtos", Schema)

//SELECT
app.get("/produtos", async (req, res) => {
    const resultado = await Produtos.find()

    
    res.render('paginas/produtos', {dados:resultado});
})

// INSERT
app.post("/", async (req, res) => {
    const { nome, preco, id_usuario } = req.body

    let resultado = await Produtos.create({ nome, preco, id_usuario })

    res.json(resultado)   
})

//UPDATE
app.put("/:id", async (req, res) =>{
    const { id } = req.params
    const { nome, preco } = req.body

    //1 - condição
    let resultado = await Produtos.updateOne({ _id: id}, {
        nome, preco
    })

    res.json(resultado)
})

//DELETE
app.delete("/", async (req, res) => {
    const { id } = req.body

    let resultado = await Produtos.deleteOne({ _id: id})


    res.render('paginas/produtos', {dados:resultado});

})

// var rotaHome = require('./app/routes/home')(app);
// var rotaFront = require('./app/routes/front')(app);
// var rotaBack = require('./app/routes/back')(app);
// var rotaContato = require('./app/routes/contato')(app);
// var rotaLoja = require('./app/routes/loja')(app);
// var rotaProdutos = require('./app/routes/produtos')(app);
// var rotaCadastro = require('./app/routes/cadastro')(app);

















// var express = require('express');
// var app = express();
// app.set('view engine','ejs');

// app.get('/', function(req, res){
//     res.render('index');
// });
// app.get('/backend', function(req, res){
//     res.render('backend');
// });
// app.listen(3000, function(){
//     console.log("Servidor rodando com Express+EJS");
// });

// var express = require('express');
// var app = express();

// app.get('/', function(req, res){
//     res.send("<html><body>Full Stack Eletro com NodeJS (utilizando Express)</body></html>");
// });
// app.get('/backend', function(req, res){
//     res.send("<html><body>puxando o backend(utilizando Express)</body></html>");
// });
// app.listen(3000, function(){
//     console.log("Servidor rodando com Express");
// });


// // var http = require('http');
// // var server = http.createServer(function(req,res){
// //     res.end("<html><body>Full Stack Eletro com NodeJS</body></html>");
// // });
// // server.listen(3000);
// // console.log("server on");
