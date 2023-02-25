const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const routes = require('./src/routes');

const port = 3000;
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/src', express.static(path.join(__dirname, 'src')));

app.get('/', function (req, res) {
    res.render('home');
}); 

app.use('', routes);

app.get('*', function(req, res){
    res.status(404).render('not_found');
});

app.listen(port, () => {
    console.log('running in port ' + port);
});