const { Schema, model } = require('mongoose')

const ProdutosSchema = new Schema({
    nome: {
        type: String
    },
    preco: {
        type: Number
    },
    id_usuario: {
        type: Schema.Types.ObjectId,
        ref: "usuarios"
    },
    data_registro: {
        type: Date,
        default: new Date()
    }
})

const modelo = model("produtos", ProdutosSchema)

module.exports = modelo