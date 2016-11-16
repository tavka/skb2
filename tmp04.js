var express = require('express');
var app = express();


app.get('/', function(req, res){
  console.log('/');
      res.send('/');
    });


app.get('/test', function(req, res){
      console.log('test');
          res.send('test');
          res.redirect('http://google.com');
        });


app.get('/redirect', function(req, res){
              console.log('redirect');
//                  res.send('test');
                  res.redirect('http://google.com');
                });

                //app.error(function(err, req, res, next) {
                    //res.send(err.message, 500);
                //});

                app.use(function(req, res, next){
              //      res.status(404);
//                    log.debug('Not found URL: %s',req.url);
//                    res.send({ error: 'Not found' });
                    res.send('Not found!!!!!!!!!!!');
                    return;
                });

app.listen(3000);
