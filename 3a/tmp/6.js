const https = require('https');
var fs = require('fs');
 //var file = fs.createWriteStream('/2.txt');
https.get('https://gist.githubusercontent.com/isuvorov/ce6b8d87983611482aac89f6d7bc0037/raw/pc.json', (res) => {
//  console.log('statusCode:', res.statusCode);
//  console.log('headers:', res.headers);

  res.on('data', (d) => {
  //res.pipe(file);
  fs.writeFileSync('/3.txt', d);
    process.stdout.write(d);
  });

}).on('error', (e) => {
  //console.error(e);
});
