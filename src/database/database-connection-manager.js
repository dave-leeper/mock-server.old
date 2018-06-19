'use strict';

function DatabaseConnectionManager ( ) {
    this.config = null;
    this.databaseConnectors = [];
}

DatabaseConnectionManager.prototype.connect = function (config ) {
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

DatabaseConnectionManager.prototype.disconnect = function ( ) {
    let promises = [];

    if ( this.databaseConnectors ) {
        for (let loop = 0; loop < this.databaseConnectors.length; loop++) {
            let databaseConnector = this.databaseConnectors[loop];

            promises.push(databaseConnector.disconnect());
        }
    }
    return Promise.all(promises);
};

DatabaseConnectionManager.prototype.getConnection = function (name ) {
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

module.exports = DatabaseConnectionManager;