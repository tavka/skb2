var express = require('express');
var app = express();
var f=require('fs');



const https = require('https');
var fs = require('fs');
https.get('https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {

  fs.writeFileSync('/nodejs/skb2/src/3a/pc.json', d);
  //  process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});






app.get('/', function(req, res){
  //board
  f.readFile('/nodejs/skb2/src/3a/pc.json',function(err,data)
  {
  if(err) throw err;
  //buffer формат
  var text=data.toString();
  // Здесь парсим json
  var d1 = JSON.parse( text );
  //var c1=eval(d1.board);
    console.log(d1.board);
    res.send(d1.board);

  });



});


app.get('/volumes', function(req, res){
  f.readFile('/nodejs/skb2/src/3a/pc.json',function(err,data)
  {
  if(err) throw err;
  var text=data.toString();
  var d1 = JSON.parse( text );
  xx=d1.hdd;
var dd1=0;
var dd2=0;
  var array = [ ] ;
  var t=0;
  xx.forEach(function(volume){
    var drive_c=0;
    var drive_d=0;
    console.log(volume.volume,volume.size);
    if (!volume.volume.indexOf('C:'))
    {
    dd1=dd1+volume.size;
  }
    if (![volume.volume].indexOf('D:'))
    {
      dd2=dd2+volume.size;

    }

  });
    console.log('Итого:');
    console.log('c: '+dd1);
    console.log('d: '+dd2);
});
});



app.get('/*', function(req, res){
var p1=req.originalUrl;
var regexp = /\//ig;
var r0=p1.replace(regexp,'.');
var x1='d1'+r0;
  f.readFile('/nodejs/skb2/src/3a/pc.json',function(err,data)
  {
  if(err) throw err;
  //buffer формат
  var text=data.toString();
  // Здесь парсим json
  var d1 = JSON.parse( text );
  console.log(x1);
  var c1=eval(x1);
  if (typeof c1 == 'undefined'){console.log('404 not found');    res.send('404 not found');}
  else{
    console.log('Status 200');
    console.log(c1);
    res.send(c1);
  }
  });
});



app.listen(3000);
