'use strict';
let ValidationHelper = require('./elasticsearch-validation-helper.js');
let log = require ( '../../../util/log.js' );

function IndexDropBuilder ( builder, databaseConnectionInfo ) {
    if (!ValidationHelper.validateBuilder(builder) || !ValidationHelper.validateDatabaseConnectionInfo(databaseConnectionInfo)) return;
    return (req, res, next) => {
        let databaseConnection = ValidationHelper.validateDatabaseConnection(builder, req, res, databaseConnectionInfo);
        if (!databaseConnection) return next && next();
        if (!ValidationHelper.validateIndexParam(builder, req, databaseConnectionInfo)) return next && next();;

        let indexName = req.params.index;
        databaseConnection.dropIndex( indexName ).then(( dropResult ) => {
            res.status(200);
            res.send({ index: indexName, dropped: dropResult.acknowledged });
            next && next();
        }).catch((err) => {
            const error = { message: "Error dropping " + indexName + ".", error: { status: 500, stack: err.stack }};
            log.error(log.stringify(error));
            builder.sendErrorResponse(error, res);
            next && next();
        });
    };
}

module.exports = IndexDropBuilder;
