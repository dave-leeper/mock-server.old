'use strict';
let Registry = require ( '../../util/registry.js' );

function ValidationHelper(){}

ValidationHelper.validateBuilder = function(builder) {
    if (!builder) return false;
    if (!builder.addHeaders) return false;
    if (!builder.addCookies) return false;
    return (!!builder.sendErrorResponse);
};

ValidationHelper.validateDatabaseConnection = function(builder, res, databaseConnectionInfo){
    if (!builder || !res || !databaseConnectionInfo) return null;
    builder.addHeaders(databaseConnectionInfo, res);
    builder.addCookies(databaseConnectionInfo, res);
    let databaseConnectionName = databaseConnectionInfo.name;
    let databaseConnectionManager = Registry.get('DatabaseConnectorManager');
    if (!databaseConnectionManager) {
        const error = {message: 'No database connection manager.', error: {status: 500}};
        builder.sendErrorResponse(error, res);
        return null;
    }
    let databaseConnection = databaseConnectionManager.getConnection( databaseConnectionName );
    if (!databaseConnection) {
        const error = { message: 'Error connecting to database. No connection found for ' + databaseConnectionName + '.', error: { status: 404 }};
        builder.sendErrorResponse(error, res);
        return null;
    }
    return databaseConnection
};

ValidationHelper.validateDatabaseConnectionInfo = function(databaseConnectionInfo) {
    if (!databaseConnectionInfo) return false;
    return (!!databaseConnectionInfo.name);
};

ValidationHelper.validateIndexParam = function(builder, req, res) {
    if (!req.params.index) {
        const error = { message: "Error, no index name provided.", error: { status: 400 }};
        builder.sendErrorResponse(error, res);
        return false;
    }
    return true;
};

ValidationHelper.validateParams = function(builder, req, res) {
    if (!req.params.index) {
        const error = { message: "Error, no index name provided.", error: { status: 400 }};
        builder.sendErrorResponse(error, res);
        return false;
    }
    if (!req.params.type) {
        const error = { message: "Error, no data type provided.", error: { status: 400 }};
        builder.sendErrorResponse(error, res);
        return false;
    }
    if (!req.params.id) {
        const error = { message: "Error, no record id provided.", error: { status: 400 }};
        builder.sendErrorResponse(error, res);
        return false;
    }
    return true;
};

ValidationHelper.validateUploadFile = function(builder, req, res) {
    if ((!req.files)
        || (!req.files.filename)
        || (!req.files.filename.data)) {
        const error = { message: "Error, no file was uploaded.", error: { status: 400 }};
        builder.sendErrorResponse(error, res);
        return false;
    }
    return true;
};

module.exports = ValidationHelper;
