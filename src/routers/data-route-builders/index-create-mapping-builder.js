'use strict';
let Registry = require ( '../../util/registry.js' );

function IndexCreateMappingBuilder( builder, databaseConnectionInfo )
{
    let createIndexMappingHandler = (req, res) => {
        builder.addHeaders(databaseConnectionInfo, res);
        builder.addCookies(databaseConnectionInfo, res);

        try {
            let databaseConnectionName = databaseConnectionInfo.name;
            if (!databaseConnectionName) {
                const error = { message: "Error connecting to database. No connection name found.", error: { status: 500 }};
                res.status(500);
                res.render("error", error);
                return;
            }
            let databaseConnectionManager = Registry.get('DatabaseConnectorManager');
            if (!databaseConnectionManager) {
                const error = { message: "Error connecting to database. No database connection manager found.", error: { status: 500 }};
                builder.sendErrorResponse(error, res);
                return;
            }
            let databaseConnection = databaseConnectionManager.getConnection( databaseConnectionName );
            if (!databaseConnection) {
                const error = { message: "Error connecting to database. No connection found." + databaseConnectionName, error: { status: 500 }};
                builder.sendErrorResponse(error, res);
                return;
            }
            if ((!req.files)
            || (!req.files.fileUploaded)
            || (!req.files.fileUploaded.data)) {
                const error = { message: "Error, no mapping file was uploaded.", error: { status: 500 }};
                builder.sendErrorResponse(error, res);
                return;
            }

            let mappingData = JSON.parse(req.files.fileUploaded.data.toString());
            databaseConnection.createIndexMapping( mappingData )
                .then(() => {
                    const success = {status: "success", operation: "Create index mapping " + mappingData.index + "/" + mappingData.type + "."};
                    res.status(200);
                    res.send(JSON.stringify(success));
                })
                .catch(( err ) => {
                    const error = { message: "Error creating index mapping. " + err.error, error: { status: 500 }};
                    routerClass.sendErrorResponse(error, res);
                });
        } catch (err) {
            const error = { message: "Error uploading ElasticSearch mapping file.", error: { status: 500, stack: err.stack }};
            builder.sendErrorResponse(error, res);
        }
    };

    return createIndexMappingHandler;
}

module.exports = IndexCreateMappingBuilder;
