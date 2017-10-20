//@formatter:off
'use strict';

var chai = require( 'chai' ),
    expect = chai.expect,
    Router = require('../../routes/router.js'),
    MicroservicesMicroservice = require('../../microservices/microservices.js'),
    MockResponse = require('../mock-response.js');
var config = {
    "mocks": [
        {
            "path": "/json",
            "responseFile": "./server-config.json",
            "fileType": "JSON",
            "headers": [ { "header": "MY_HEADER", "value": "MY_HEADER_VALUE" } ]
        },
        {
            "path": "/hbs",
            "responseFile": "index.hbs",
            "fileType": "HBS",
            "hbsData": {"title": "Index"},
            "headers": [ { "header": "MY_HEADER", "value": "MY_HEADER_VALUE" } ]
        },
        {
            "path": "/text",
            "responseFile": "./views/index.hbs",
            "fileType": "TEXT",
            "headers": [ { "header": "MY_HEADER", "value": "MY_HEADER_VALUE" } ]
        },
        {
            "path": "/json-junk",
            "responseFile": "./JUNK.json",
            "fileType": "JSON",
            "headers": [ { "header": "MY_HEADER", "value": "MY_HEADER_VALUE" } ]
        },
        {
            "path": "/text-junk",
            "responseFile": "./JUNK.tex",
            "fileType": "TEXT",
            "headers": [ { "header": "MY_HEADER", "value": "MY_HEADER_VALUE" } ]
        }
    ],
    "services": [
        {
            "path": "/ping",
            "name": "Ping",
            "description": "A basic ping service.",
            "serviceFile": "ping.js",
            "serviceData": { "name": "My Server", "version": "1.0" },
            "headers": [ { "header": "MY_HEADER", "value": "MY_HEADER_VALUE" } ]
        },
        {
            "path": "/microservices",
            "name": "Services List",
            "description": "Provides a list of microservices registered with this server.",
            "serviceFile": "services.js"
        },
        {
            "path": "/mocks",
            "name": "Mock Services List",
            "description": "Provides a list of mock microservices registered with this server.",
            "serviceFile": "mocks.js"
        }
    ],
    "databaseConnections" : [
        {
            "name": "elasticsearch",
            "description": "Elasticsearch service.",
            "databaseConnector": "elasticsearch.js",
            "config": {
                "host": "localhost:9200",
                "log": "trace"
            }
        }
    ]
};

describe( 'As a developer, I need need to obtain a list of microservices that are available.', function()
{

    it ( 'should return a list of microservices available.', ( ) => {
        let microservicesMicroservice = new MicroservicesMicroservice();
        let mockResponse = new MockResponse();
        let mockRequest = {};
        let mockServiceInfo = {};
        let expectedResponse = '[{"path":"/ping","name":"Ping","description":"A basic ping service."},{"path":"/microservices","name":"Services List","description":"Provides a list of microservices registered with this server."},{"path":"/mocks","name":"Mock Services List","description":"Provides a list of mock microservices registered with this server."}]';

        Router.server = {};
        Router.server.serverConfig = config;
        microservicesMicroservice.do(mockRequest, mockResponse, Router, mockServiceInfo);
        expect(mockResponse.sendString).to.be.equal(expectedResponse);
    });
});


