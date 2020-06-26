const express = require('express'),
    path = require('path'),
    app = express();

const port = 3001;

const routes = require('./routes/index');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../reactjs/build')));

app.disable('x-powered-by');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', routes);

app.get('*', function(request, response) {
	response.sendFile(path.resolve(__dirname, '../reactjs/build', 'index.html'));
});

const server = app.listen( process.env.PORT || port, function(){
    console.log('Listening on port ' + server.address().port);
  });