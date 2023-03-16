const express = require('express');
const swagger_j = require('swagger-jsdoc');
const swagger_ui = require('swagger-ui-express');

const routes = require('./src/routes');

require('dotenv').config();

const mongoose = require('mongoose');

const port = process.env.PORT || 3000;
const app = express();

const mongoUrl = process.env.MONGO_URL; 

const swagger = require('./swagger.config');
const swaggerDoc = swagger_j(swagger);

app.use('/swagger', swagger_ui.serve, swagger_ui.setup(swaggerDoc));

app.use('', routes);

app.get('*', function(req, res){
    res.send("Pagina no encontrada");
});

mongoose.connect(mongoUrl).then(() => {
    console.log('Connection to database succesfull');
    app.listen(port, () => {
        console.log('running in port ' + port);
    });
}).catch(err => {
        console.log('Failed to connect to the database');
    });

    

