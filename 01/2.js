// �������� ������ fs
var fs = require('fs');

// ���������� ����������� ����� � ������
fs.readFile('example_log.txt', function (err, logData) {

  // ���� ��������� ������, �� ���������� ����������,
  // � ������ ���������� ����������.
  if (err) throw err;

  // logData ����� ��� Buffer, ��������� � ������
  var text = logData.toString();
//json!!!!!!!!!!!!!!! к нему обраиться просто  results[letter] или results['D']
  var results = {};


  var lines = text.split('\n');
//console.log(lines);
  lines.forEach(function(line) {
    var parts = line.split(' ');
//это буквы из фала
    var letter = parts[1];
    //console.log('letter='+letter);
//это цифры из файла
    var count = parseInt(parts[2]);
  //console.log('count'+count);
//console.log('results[letter]->'+results[letter]);

    if(!results[letter]) {

      results[letter] = 0;
      //console.log('results[letter]!!'+results[letter]+'!!');
    }

    results[letter] += parseInt(count);
    //console.log('results[letter]'+results[letter]+'<-');
  });
  results['D'] = 66;
  console.log(results);
    // { A: 2, B: 14, C: 6 }
});
