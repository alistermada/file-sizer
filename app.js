var express = require('express');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var app = express();

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.post('/upload', upload.single('file'), function(req, res) {
  res.send({filename: req.file.originalname, size: req.file.size});
});

app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port') + '...');
});