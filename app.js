const app = require('./app/config/server');
const connection = require('./app/config/connection')
const Produtos = require('./app/models/Produtos')

//SELECT
app.get("/", async (req, res) => {
    const resultado = await Produtos.find()

    res.json(resultado)
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

    res.json(
        resultado
    )
})

var rotaHome = require('./app/routes/home')(app);
var rotaHome = require('./app/routes/front')(app);
var rotaHome = require('./app/routes/back')(app);
var rotaHome = require('./app/routes/contato')(app);
var rotaHome = require('./app/routes/loja')(app);
var rotaHome = require('./app/routes/produtos')(app);
var rotaHome = require('./app/routes/cadastro')(app);

app.listen(3000, function(){
    console.log("servidor rodando com Express+EJS+CommonJS");
});















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
