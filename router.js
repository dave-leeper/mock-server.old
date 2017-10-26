'use strict'

let util = require ( './util/utilities.js' );
let log = require ( './util/logger-utilities.js' );
let fs = require("fs");

function Router ( ) { }

Router.startTime = null;
Router.server = null;

Router.connect = function ( router, config ) {
    if ( (!config) || (!router) ) {
        return router;
    }

    let mocks = config.mocks;
    let microservices = config.microservices;
    let databaseConnections = config.databaseConnections;

    if (mocks) {
        for (let loop1 = 0; loop1 < mocks.length; loop1++) {
            let mock = mocks[loop1];
            let verb = ((mock.verb) ? mock.verb : "GET" );
            let file = mock.responseFile;
            let fileType = ((mock.fileType)? mock.fileType.toString().toUpperCase() : "" );
            let handler;

            if ("JSON" == fileType) {
                handler = (req, res) => {
                    Router.addHeaders(mock, res);
                    if (!fs.existsSync( file )) {
                        res.render("not-found", null);
                        return;
                    }

                    let jsonResponseFileContents = util.readFileSync(file);

                    res.send(jsonResponseFileContents);
                }
            } else if ("HBS" == fileType) {
                handler = (req, res) => {
                    Router.addHeaders(mock, res);
                    res.render(file, mock.hbsData);
                }
            } else {
                handler = (req, res) => {
                    Router.addHeaders(mock, res);
                    if (!fs.existsSync(file)) {
                        res.render("not-found", null);
                        return;
                    }

                    let textResponseFileContents = util.readFileSync(file, mock.encoding);

                    res.send(textResponseFileContents);
                }
            }

            if ("GET" === verb) {
                router.get(mock.path, handler);
            } else if ("PUT" === verb) {
                router.put(mock.path, handler);
            } else if ("POST" === verb) {
                router.post(mock.path, handler);
            } else if ("DELETE" === verb) {
                router.delete(mock.path, handler);
            } else if ("OPTIONS" === verb) {
                router.opt(microservice.path, handler);
            }
        }
    }

    if (microservices) {
        for (let loop2 = 0; loop2 < microservices.length; loop2++) {
            let microservice = microservices[loop2];
            let verb = ((microservice.verb) ? microservice.verb : "GET" );
            let microservicePath = microservice.serviceFile;
            let microserviceClass = require( microservicePath );

            let micro = new microserviceClass();
            let handler = (req, res) => {
                Router.addHeaders(microservice, res);

                try {
                    micro.do(req, res, Router, microservice);
                } catch (err) {
                    res.status(500);
                    res.render("error", {
                        message: "Error calling microservice " + microservice.name + ".",
                        error: {status: 500, stack: err.stack}
                    });
                }
                return;
            }

            if ("GET" === verb) {
                router.get(microservice.path, handler);
            } else if ("PUT" === verb) {
                router.put(microservice.path, handler);
            } else if ("POST" === verb) {
                router.post(microservice.path, handler);
            } else if ("DELETE" === verb) {
                router.delete(microservice.path, handler);
            } else if ("OPTIONS" === verb) {
                router.opt(microservice.path, handler);
            }
        }
    }

    if (databaseConnections) {
    }

    return router;
};

Router.defaultResponse = function ( res ) {
    res.render('not-found', {title: 'File Not Found'});
};

Router.addHeaders = function ( responseRecord, res ) {
    if ((typeof responseRecord.headers === 'undefined')
    || (!responseRecord.headers.length)){
        return;
    }
    for (let loop = 0; loop < responseRecord.headers.length; loop++) {
        let header = responseRecord.headers[loop];
        res.header(header.header, header.value);
    }
};

Router.getMockResponseInfo = function ( path ) {
    if ((!Router.server) || (!Router.server.serverConfig) || (!Router.server.serverConfig.mocks)) {
        return null;
    }
    for (let loop = 0; loop < Router.server.serverConfig.mocks.length; loop++) {
        let responseRecord = Router.server.serverConfig.mocks[loop];

        if ((responseRecord.path == path)
        && (responseRecord.responseFile)) {
            return responseRecord;
        }
    }
    return null;
};

Router.getMicroserviceInfo = function ( path ) {
    if ((!Router.server) || (!Router.server.serverConfig)) {
        return null;
    }
    for (let loop = 0; loop < Router.server.serverConfig.microservices.length; loop++) {
        let responseRecord = Router.server.serverConfig.microservices[loop];

        if ((responseRecord.path == path)
            && (responseRecord.serviceFile)) {
            return responseRecord;
        }
    }
    return null;
};

module.exports = Router;