const express = require('express');
const app = express();
const path = require('path');
const port = 5500;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about',function(req,res){
res.sendFile(path.join(__dirname,'about.html'))
})

app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname,'contact.html'))
  })

  app.use(function(req, res, next) {
    res.status(404).sendFile(path.join(__dirname,'404.html'));
  });

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
