var expressss= require('express');
var appppp = expressss();
console.log(__dirname);


//appppp.use(expressss.static(__dirname + '/2'));
appppp.use(expressss.static(__dirname + '/2'));


appppp.listen(4000);
