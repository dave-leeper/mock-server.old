'use strict';

let log = require ( '../util/logger-utilities.js' );

function DatabaseConnectorManager ( ) {
    this.config = null;
    this.databaseConnectors = [];
}

DatabaseConnectorManager.prototype.connect = function ( config ) {
    let promises = [];

    this.config = config;
    if ((!config) || (!config.databaseConnections)) {
        return Promise.all(promises);
    }

    for (let loop = 0; loop < config.databaseConnections.length; loop++) {
        let databaseConnectorInfo = config.databaseConnections[loop];
        let databaseConnectorClass = require ( './' + databaseConnectorInfo.databaseConnector );
        let databaseConnector = new databaseConnectorClass(databaseConnectorInfo.name);

        this.databaseConnectors.push(databaseConnector);
        promises.push(databaseConnector.connect(databaseConnectorInfo));
    }
    return Promise.all(promises);
};

DatabaseConnectorManager.prototype.disconnect = function ( ) {
    let promises = [];

    for (let loop = 0; loop < this.databaseConnectors.length; loop++) {
        let databaseConnector = this.databaseConnectors[loop];

        promises.push(databaseConnector.disconnect());
    }
    return Promise.all(promises);
};

DatabaseConnectorManager.prototype.getConnector = function ( name ) {
    if ((!this.databaseConnectors) || (!this.databaseConnectors.length)) {
        return null;
    }

    for (let loop = 0; loop < this.databaseConnectors.length; loop++) {
        let databaseConnector = this.databaseConnectors[loop];

        if (name === databaseConnector.name) {
            return databaseConnector;
        }
    }
    return null;
};

DatabaseConnectorManager.prototype.buildConnectionAPI = function ( Router, router, databaseConnectionInfo ) {
    let connectHandler = require("./api-builders/connect-builder.js")( Router, databaseConnectionInfo );
    if (!connectHandler) {
        if (log.will(log.ERROR)) {
            log.error("Connect handler not defined for database connection " + databaseConnectionInfo.path + ".");
            return;
        }
    }
    let pingHandler = require("./api-builders/ping-builder.js")( Router, databaseConnectionInfo );
    if (!pingHandler) {
        if (log.will(log.ERROR)) {
            log.error("Ping handler not defined for database connection " + databaseConnectionInfo.path + ".");
            return;
        }
    }
    let disconnectHandler = require("./api-builders/disconnect-builder.js")( Router, databaseConnectionInfo );
    if (!disconnectHandler) {
        if (log.will(log.ERROR)) {
            log.error("Disconnect handler not defined for database connection " + databaseConnectionInfo.path + ".");
            return;
        }
    }
    let paths = DatabaseConnectorManager.buildConnectionAPIPaths(databaseConnectionInfo.name);
    let connectPath = paths[0];
    let pingPath = paths[1];
    let disconnectPath = paths[2];

    router.get(connectPath, connectHandler);
    router.get(pingPath, pingHandler);
    router.get(disconnectPath, disconnectHandler);
};

DatabaseConnectorManager.prototype.buildTableAPI = function ( Router, router, databaseConnectionInfo ) {
    let existsHandler = require("./api-builders/table-exists-builder.js")( Router, databaseConnectionInfo );
    if (!existsHandler) {
        if (log.will(log.ERROR)) {
            log.error("Table exists handler not defined for database connection " + databaseConnectionInfo.path + ".");
            return;
        }
    }
    let createHandler = require("./api-builders/create-table-builder.js")( Router, databaseConnectionInfo );
    if (!createHandler) {
        if (log.will(log.ERROR)) {
            log.error("Create table handler not defined for database connection " + databaseConnectionInfo.path + ".");
            return;
        }
    }
    let dropHandler = require("./api-builders/drop-table-builder.js")( Router, databaseConnectionInfo );
    if (!dropHandler) {
        if (log.will(log.ERROR)) {
            log.error("Drop table handler not defined for database connection " + databaseConnectionInfo.path + ".");
            return;
        }
    }
    let paths = DatabaseConnectorManager.buildTableAPIPaths(databaseConnectionInfo.name);
    let existsPath = paths[0];
    let createPath = paths[1];
    let dropPath = paths[2];

    router.get(existsPath, existsHandler);
    router.get(createPath, createHandler);
    router.get(dropPath, dropHandler);
};

DatabaseConnectorManager.buildConnectionAPIPaths = function ( name ) {
    let paths = [];
    if ( !name ) {
        return paths;
    }
    let urlName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();

    paths.push("/database/connection/" + urlName + "/connect");
    paths.push("/database/connection/" + urlName + "/ping");
    paths.push("/database/connection/" + urlName + "/disconnect");
    return paths;
};

DatabaseConnectorManager.buildTableAPIPaths = function ( name ) {
    let paths = [];
    if ( !name ) {
        return paths;
    }
    let urlName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();

    paths.push("/table/exists/" + urlName);
    paths.push("/table");
    paths.push("/table/" + urlName);
    return paths;
};

module.exports = DatabaseConnectorManager;
