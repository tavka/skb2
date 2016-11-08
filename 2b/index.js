var express = require('express');
var app = express();
app.get('/', function(req, res){
if(req.query.fullname){
var aa=req.query.fullname.trim();
var str = aa;
var regexp = / /ig;
var r0 =str.match(regexp);
if(r0){
var r1=r0.length;

var r2 =str.split(' ');
if (r1>2)
{
aa='Invalid fullname';
}

if (r1==2)
{
aa=r2[2] +' '+r2[0].charAt(0)+'. '+ r2[1].charAt(0)+'.';
}
if (r1==1)
{
aa=r2[1] +' '+r2[0].charAt(0)+'. ';
}
}
      console.log(aa);
      res.send(aa);
}
else{
  console.log('Invalid fullname');
      res.send('Invalid fullname');
 };
});
app.listen(3000);
