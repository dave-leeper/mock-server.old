'use strict';

const express = require('express');
const http = require('http');
const router = express.Router();
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const busboy = require('connect-busboy')
const fileUpload = require('express-fileupload');
const Router = require('./router');
const loggerUtilities = require('./util/log');

/**
 * @constructor
 */
function Server ( ) {
    this.express = null;
    this.server = null;
}

/**
 * Initialize the server.
 * @param port {Integer} The server port.
 * @param config {Object} The server config.
 * @param callback {Function} The function called once the server has started.
 */
Server.prototype.init = function ( port, config, callback )
{
    this.express = express();

    // Logger setup
    if (config.logging) {
        loggerUtilities.config( config.logging );
    }

    // view engine setup
    this.express.set('views', path.join(__dirname, 'views'));
    this.express.set('view engine', 'hbs');

    this.express.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(cookieParser());
    this.express.use(express.static(path.join(__dirname, 'public')));
    this.express.use(busboy());
    this.express.use(fileUpload());

    // app.use('/', index);
    this.express.use('/', Router.connect( router, config ));
    this.express.locals.___extra = {
        startTime: new Date(),
        server: this,
        serverConfig: config,
        stack: router.stack,
        databaseConnectionManager: Router.databaseConnectionManager
    };

    // catch 404 and forward to error handler
    this.express.use(function(req, res, next) {
        let err = new Error('Not Found: ' + req.url);
        err.status = 404;
        next(err);
    });

    // error handler
    this.express.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    /**
     * Get port from environment and store in Express.
     */
    const normalizedPort = this.normalizePort(port);
    this.express.set('port', normalizedPort);

    this.server = http.createServer(this.express);
    this.server.listen(normalizedPort, callback);
    this.server.on('error', this.onError);

    console.log('Listening on port ' + normalizedPort);
    return this;
};

Server.prototype.stop = function (callback) {
    try {
        if (this.express.locals.___extra.databaseConnectionManager) {
            this.express.locals.___extra.databaseConnectionManager.disconnect();
        }
    } catch (err) {
        console.log("Error shutting down database connections.");
    }
    this.server.close(callback);
};

/**
 * Normalize a port into a number, string, or false.
 * @param val {Object} The port number or pipe.
 */
Server.prototype.normalizePort = function (val) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
};

/**
 * Event listener for HTTP server "error" event.
 * @param error {Object} The error.
 */
Server.prototype.onError = function (error) {
    console.log( error );
};

module.exports = Server;
