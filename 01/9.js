var fs = require('fs');
var fs2 = require('fs');

var express = require('express');
var app = express();
fs.readFile('stc4.csv', function (err, logData) {

  var text = logData.toString();

  var lines = text.split('\n');
  lines.forEach(function(line) {
    var parts = line.split(';');
    var p0 = parts[0];
    var p1 = parts[1];
    var p2 = parts[2];
    var p3 = parts[3];
    var p4 = parts[4];
    var p5 = parts[5];
    var p6 = parts[6];

if (p4){
  var parts2 = p4.split(',');
  var logStream = fs2.createWriteStream('stknew.txt', {'flags': 'a'});
  parts2.forEach(function(parts3) {
    var pp=p3+parts3.replace(/"/g, '');
      var pp2=pp.replace(/\s/g, '');
      var pp3=p3+';'+pp2+';'+p1+';'+p2+';'+p5+';'+p6+'\n';
      logStream.write(pp3);
 });
}
else {
  var pp3=p3+';'+p3+';'+p1+';'+p2+';'+p5+';'+p6+'\n';
  //,defaultEncoding: 'utf8'
  var logStream = fs2.createWriteStream('stknew.txt', {'flags': 'a'});
      logStream.write(pp3);
}

  });

});
