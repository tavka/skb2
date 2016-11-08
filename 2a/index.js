var express = require('express');
var app = express();

app.get('/', function(req, res){
if(req.query.a){ var aa=req.query.a;} else{var aa='0'};
if(req.query.b){ var bb=req.query.b;} else{var bb='0'};
var aa1=+aa;
var bb1=+bb;
var s=aa1+bb1;
console.log(s);
    res.send(String(s));


});
app.listen(3000);
