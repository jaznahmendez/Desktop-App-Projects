const port = process.env.PORT || 3000;

module.exports = {

    swaggerDefinition:{
        swagger: '2.0',
        info: {
            title: 'API PPE',
            version: '1.0.0',
            description: 'API para tareas',
            servers: ['http://localhost:' + port]
        },
        
    },
    apis: ['src/routes/*.js']
}