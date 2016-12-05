var express = require('express');
var app = express();
var fs = require('fs');
var f = require('fs');
var f1 = require('fs');
var request = require("request"),
url = "https://gist.githubusercontent.com/isuvorov/55f38b82ce263836dadc0503845db4da/raw/pets.json";

request(url, function (error, response, body) {
    if (!error) {
        fs.writeFileSync('/nodejs/skb2/src/3b/pets.json', body);
    } else {
        console.log("Произошла ошибка: " + error);
    }
});

//GET / 	Получение списка всей исходной базы
app.get('/', function(req, res){
  f.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
  {
  if(err) throw err;
  //buffer формат
  var text=data.toString();
  // Здесь парсим json
  var d1 = JSON.parse( text);
      res.send(d1);
  });
});

//GET /users 	Получить список пользователей
//GET /users?havePet=cat 	Пользователи у которых есть коты
app.get('/users', function(req, res){
  f.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
  {
  if(err) throw err;
  var havePet = req.query.havePet;
  if (havePet=='cat')
  {
    f1.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
      {
          if(err) throw err;
          var text=data.toString();
          var d1 = JSON.parse( text);
          var xxx=d1.pets;
          var positiveArr = xxx.filter(function(stroka) { return stroka.type=='cat';  });
          var x1=JSON.stringify(positiveArr, ["id", "userId","type","color","age"]) ;
          res.send(x1);
        });
  }
  else{
  //buffer формат
  var text=data.toString();
  // Здесь парсим json
  var d1 = JSON.parse( text);
  //console.log(d1.users);
      res.send(d1.users);
    }
  });
});

//GET /users/:id 	Получить данные конкретного пользователя по его ID
app.get('/users/:id', function(req, res, next){
var vvv=req.param("id");
if (!isNaN(vvv))
{
  f.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
  {
    if(err) throw err;
    var text=data.toString();
    var d1 = JSON.parse( text);
    var xxx=d1.users;
    xxx.forEach(function(id){
      if  (id.id==vvv){
    //    console.log(id.id+id.username+id.fullname+id.password+id.values.money+id.values.origin);
//        var x1=id.id+id.username+id.fullname+id.password+id.values.money+id.values.origin;
var x1='{'+
  '"users": ['
    +'{'
      +'"id": '+id.id+','
      +'"username": "'+id.username+'",'
      +'"fullname": "'+id.fullname+'",'
      +'"password": "'+id.password+'",'
      +'"values": {'
      +  '"money": "'+id.values.money+'",'
    +    '"origin": "'+id.values.origin+'"'
    +  '}]'
    +'}';
         res.send(x1);
//res.json(id.id+id.username+id.fullname+ id.password+id.values);
       }
    });
  });
}
else{next();}
});

//GET /users/:username 	Получить данные конкретного пользователя по его username
app.get('/users/:username', function(req, res){
  var vvv=req.param("username");


  if (isNaN(vvv))
  {
    f.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
    {
      if(err) throw err;
      var text=data.toString();
      var d1 = JSON.parse( text);
      var xxx=d1.users;
      xxx.forEach(function(id){
        if  (id.username==vvv){
  var x1='{'+
    '"users": ['
      +'{'
        +'"id": '+id.id+','
        +'"username": "'+id.username+'",'
        +'"fullname": "'+id.fullname+'",'
        +'"password": "'+id.password+'",'
        +'"values": {'
        +  '"money": "'+id.values.money+'",'
      +    '"origin": "'+id.values.origin+'"'
      +  '}]'
      +'}';
           res.send(x1);
         }
      });
    });
  }

});

//GET /users/:username/pets 	Получить список животных конкретного пользователя по его username/id
app.get('/users/:username/pets', function(req, res,next){
  var vvv=req.param("username");
  if (isNaN(vvv))
  {
    //get id from username
        f.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
        {
          if(err) throw err;
          var text=data.toString();
          var d1 = JSON.parse( text);
          var xxx=d1.users;
          xxx.forEach(function(stroka){
            if  (stroka.username==vvv)
            {
              var idd=stroka.id;
              f1.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
              {
                 if(err) throw err;
                 var text=data.toString();
                 var d1 = JSON.parse( text);
                 var xxx=d1.pets;
                var positiveArr = xxx.filter(function(stroka) { return stroka.userId==idd;  });
                var x1=JSON.stringify(positiveArr, ["id", "userId","type","color","age"]) ;
                console.log( x1 );
                res.send(x1);
              });
            }
        });
        });
  }else{next();};
});

//GET /users/:id/pets 	Получить список животных конкретного пользователя по его username/id
app.get('/users/:id/pets', function(req, res,next){
  var vvv=req.param("id");
  if (!isNaN(vvv))
  {
              var idd=vvv;
              f1.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
              {
                 if(err) throw err;
                 var text=data.toString();
                 var d1 = JSON.parse( text);
                 var xxx=d1.pets;
                var positiveArr = xxx.filter(function(stroka) { return stroka.userId==idd;  });
                var x1=JSON.stringify(positiveArr, ["id", "userId","type","color","age"]) ;
                console.log( x1 );
                res.send(x1);
              });

  }
});

//GET /pets 	Получить список животных
//GET /pets?type=cat 	Получить список только котов
//GET /pets?age_gt=12 	Получить животных возраст которых строго больше 12 месяцев
//GET /pets?age_lt=25 	Получить животных возраст которых строго меньше 25 месяцев
app.get('/pets', function(req, res){
var key =0;
var type = req.query.type;
var age_gt = req.query.age_gt;
var age_lt = req.query.age_lt;
// type=cat
if (type=='cat' && key==0)
{
  key==1;
  f1.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
  {
     if(err) throw err;
     var text=data.toString();
     var d1 = JSON.parse( text);
     var xxx=d1.pets;
    var positiveArr = xxx.filter(function(stroka) { return stroka.type=='cat';  });
    var x1=JSON.stringify(positiveArr, ["id", "userId","type","color","age"]) ;
    console.log( x1 );
    res.send(x1);
  });
}
// age_gt=12
if (age_gt==12 && key==0)
{
  key==1;
  f1.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
  {
     if(err) throw err;
     var text=data.toString();
     var d1 = JSON.parse( text);
     var xxx=d1.pets;
    var positiveArr = xxx.filter(function(stroka) { return stroka.age>=12;  });
    var x1=JSON.stringify(positiveArr, ["id", "userId","type","color","age"]) ;
    console.log( x1 );
    res.send(x1);
      });
}
//age_lt=25
if (age_lt==25 && key==0)
{
  key==1;
  f1.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
  {
     if(err) throw err;
     var text=data.toString();
     var d1 = JSON.parse( text);
     var xxx=d1.pets;
    var positiveArr = xxx.filter(function(stroka) { return stroka.age<=25;  });
    var x1=JSON.stringify(positiveArr, ["id", "userId","type","color","age"]) ;
    console.log( x1 );
    res.send(x1);
      });
}
//   /pets
if (key==0)
{
  f.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
  {
  if(err) throw err;
  var havePet = req.query.havePet;
  //buffer формат
  var text=data.toString();
  // Здесь парсим json
  var d1 = JSON.parse( text);
  //console.log(d1.users);
      res.send(d1.pets);
  });
}


});

//GET /pets/:id 	Получить животного по его ID
app.get('/pets/:id', function(req, res, next){
var vvv=req.param("id");
if (!isNaN(vvv))
{
   f.readFile('/nodejs/skb2/src/3b/pets.json',function(err,data)
   {
     if(err) throw err;
     var text=data.toString();
     var d1 = JSON.parse( text);
     var xxx=d1.pets;
     xxx.forEach(function(id){
      if  (id.id==vvv){
        var x1=JSON.stringify(id, ["id", "userId","type","color","age"]) ;
         res.send(x1);
       }
     });
   });
 }
 else{next();}
});






app.listen(3000);
