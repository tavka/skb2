
var f=require('fs');

f.readFile('/1.txt',function(err,data)
{
  if(err) throw err;
//buffer формат
var text=data.toString();

//console.log(text);
//Разбивка файла по строкам
  var lines = text.split('\n');


//  Метод «arr.forEach(callback[, thisArg])» используется для перебора массива.
//  Он для каждого элемента массива вызывает функцию callback.
//  Этой функции он передаёт три параметра callback(item, i, arr):
//    item – очередной элемент массива.
//      i – его номер.
//      arr – массив, который перебирается.

lines.forEach(function(item, i, lines) {
  console.log(i+'. '+item);
});

}
);
