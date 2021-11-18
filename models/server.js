const express = require('express');
const cors = require('cors');

const router = require('../routes/user');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.usuarioPath = '/api/usuarios';

        // Middleware
        this.middleware();


        // Rutas de aplicacion
        this.routes();
    }

    middleware(){

        // CORS
        this.app.use( cors() );

        // lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Publico
        this.app.use( express.static('public'));

    }

    routes() {

        this.app.use(this.usuarioPath, router);

    }

    listen(){

        this.app.listen(this.port, () => {
            console.log('servidor corriendo ',this.port);
        });

    }

}

module.exports = Server;