//var fs2 = require('fs');
//  fs2.writeFileSync('ttt.txt',{'flags': 'a'}, 'pp2');
//  fs3.writeFileSync('ttt.txt',{'flags': 'a'}, 'pp3');

var fs2 = require('fs');
var logStream = fs2.createWriteStream('log.txt', {'flags': 'a'});
// use {'flags': 'a'} to append and {'flags': 'w'} to erase and write a new file
logStream.write('Initial line...\n');
logStream.write('Initial line...\n');
logStream.end('');
