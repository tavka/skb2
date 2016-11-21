var express = require('express');
var app = express();

app.get('/*', function(req, res){
var p1=req.originalUrl;
var query = require('url').parse(req.url,true).query;
var fullname = query.username;
console.log(fullname);


//?username=https://vk.com/skillbranch
//?username=//vk.com/skillbranch
//?username=skillbranch
//?username=https://vk.com/skillbranch?w=wall-117903599_1076
var pos=fullname.lastIndexOf('/');
if (pos){
//str.substring(indexA, [indexB])
var x=fullname.substring(pos+1);
var x1=x.match(/\w+/g);
//console.log(x1.length);
console.log('@'+x1[0]);
}
if (!pos){
var x=fullname;
var x1=x.match(/\w+/g);
//console.log(x1.length);
console.log('@'+x1[0]);
}





});



app.listen(3000);
