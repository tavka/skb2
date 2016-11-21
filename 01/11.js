var fs2 = require('fs');
 var logStream = fs2.createWriteStream('111.txt', {'flags': 'a'});
 logStream.write('привет');
