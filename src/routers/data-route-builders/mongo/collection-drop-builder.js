'use strict';
let ValidationHelper = require('./mongo-validation-helper.js');
let Log = require ( '../../../util/log.js' );

function CollectionDropBuilder (builder, databaseConnectionInfo ) {
    if (!ValidationHelper.validateBuilder(builder) || !ValidationHelper.validateDatabaseConnectionInfo(databaseConnectionInfo)) return;
    return (req, res, next) => {
        let databaseConnection = ValidationHelper.validateDatabaseConnection(builder, req, res, databaseConnectionInfo);
        if (!databaseConnection) return next && next();
        if (!ValidationHelper.validateCollectionParam(builder, req, databaseConnectionInfo)) return next && next();;

        let collectionName = req.params.collection;
        databaseConnection.dropCollection( collectionName ).then(( dropResult ) => {
            res.status(200);
            res.send({ collection: collectionName, dropped: dropResult.status });
            next && next();
        }).catch((err) => {
            const error = { message: "Error dropping " + collectionName + ".", error: { status: 500, stack: err.stack }};
            if (Log.will(Log.ERROR)) Log.error(Log.stringify(error));
            builder.sendErrorResponse(error, res);
            next && next();
        });
    };
}

module.exports = CollectionDropBuilder;