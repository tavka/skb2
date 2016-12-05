//var n = 0 / 0;
//var n='1';
//console.log( isNaN('1') );
//console.log( isNaN(1) );
//console.log( isNaN('sss') );


//var user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
//user = JSON.parse(user);
//console.log( user.friends[2] );


var f = require('fs');
f.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
{
  if(err) throw err;
  var text=data.toString();
  var d1 = JSON.parse( text);
  var xxx=d1.users;
  xxx.forEach(function(stroka){
    //if  (stroka.username==vvv){
console.log(stroka.username);
});
    });
