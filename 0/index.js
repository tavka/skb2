      console.log('aa');

var express = require('express');
var app = express();
app.get('/0', function(req, res){
  res.send('zzzzzzzzzz');
});
app.listen(3000);
