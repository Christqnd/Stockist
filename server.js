const express = require('express');
const colors = require('colors');
const app= express();

const bodyParser= require('body-parser');
const cors= require('cors');

var corsOptions={
    origin:true,
    credentials:true
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/public',express.static(__dirname + '/public'));

var routes= require('./routes/routes');
routes.assignRoutes(app);

app.get('/',function(req,res){
    res.send('<h1>Hola soy un servidor de node</h1>');
    res.end();
});

app.listen(3000,function(){
    console.log('Server on 3000 listen'.red);
});