const consign = require('consign')
const express = require('express')
const app = express()



app.use(express.json())

consign()
.include('./app/routes')
.then('./app/config/database.js')
.then('./app/models')
.into(app)

app.set('view engine', "ejs")
app.set('views', './app/views')

const port = 8080
app.listen(port, () => {
    console.log("http://localhost:" + port)
})

module.exports = app






















// var express = require('express');
// var consign = require('consign');
// var bodyParser = require('body-parser');

// var app = express();
// app.set('view engine','ejs');
// app.set('views','././app/views');

// app.use(bodyParser.urlencoded({extended:true}));

// consign()
// .include('././app/routes')
// .then('././app/config/database.js')
// .then('././app/models')
// .into(app);

// module.exports = app;






// código antes do consign

// var express = require('express');
// var app = express();
// app.set('view engine','ejs');
// app.set('views','./app/views');
// module.exports = app;
