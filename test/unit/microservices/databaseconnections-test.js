//@formatter:off
'use strict';

let chai = require( 'chai' ),
    expect = chai.expect,
    Router = require('../../../router.js'),
    DatabaseConnectionsMicroservice = require('../../../microservices/databaseconnections.js'),
    MockRequest = require('../../mock-request.js'),
    MockResponse = require('../../mock-response.js');
let config = {
    "databaseConnections" : [
        {
            "name": "elasticsearch",
            "description": "Elasticsearch service.",
            "databaseConnector": "elasticsearch.js",
            "generateConnectionAPI": true,
            "generateTableAPI": true,
            "config": {
                "host": "localhost:9200",
                "log": "trace"
            }
        }
    ]
};

describe( 'As a developer, I need need to obtain a list of database connections that are available.', function()
{
    it ( 'should return a list of database connections available.', ( ) => {
        let databaseConnectionsMicroservice = new DatabaseConnectionsMicroservice();
        let mockRequest = new MockRequest();
        let mockResponse = new MockResponse();
        let mockServiceInfo = {};
        let expectedResponse = JSON.stringify([{
            "name":"elasticsearch",
            "description":"Elasticsearch service.",
            "path":[
                "/elasticsearch/database/connection/elasticsearch/connect",
                "/elasticsearch/database/connection/elasticsearch/ping",
                "/elasticsearch/database/connection/elasticsearch/disconnect"
            ]
        }]);
        mockRequest.app.locals.___extra.serverConfig = config;
        databaseConnectionsMicroservice.do(mockRequest, mockResponse, mockServiceInfo);
        expect(mockResponse.sendString).to.be.equal(expectedResponse);
    });
});


