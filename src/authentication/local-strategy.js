const PassportLocalStrategy = require('passport-local').Strategy;
const Registry = require('../util/registry' );
const Strings = require('../util/strings' );
const I18n = require('../util/i18n' );
const Log = require('../util/log' );
const accounts = require('./authentication').accounts;
const reduce = require('../util/algorithm').oneTruthyReduce;

const DEFAULT_EXPIRE_TIME = 300;

class LocalStrategy {
    constructor() {
        this.accounts = accounts;
    }
    getAuthentication() {
        return new PassportLocalStrategy((username, password, done) => {
            let operation = 'getAuthentication';
            if (!username || !password || !done) {
                const err = { operation: operation, statusType: 'error', status: 401, message: I18n.get( Strings.ERROR_MESSAGE_LOGIN_REQUIRED )};
                if (Log.will(Log.ERROR)) Log.error(Log.stringify(err));
                return done && done( null, false, err );
            }
            if (!this.accounts) {
                const err = { operation: operation, statusType: 'error', status: 501, message: I18n.get( Strings.ERROR_MESSAGE_AUTHENTICATION_NOT_CONFIGURED )};
                if (Log.will(Log.ERROR)) Log.error(Log.stringify(err));
                return done(null, false, err);
            }
            for (let loop = 0; loop < this.accounts.length; loop++) {
                let account = this.accounts[loop];
                if (account.username !== username) continue;
                if (account.password !== password) {
                    const err = { operation: operation, statusType: 'error', status: 401, message: I18n.get( Strings.ERROR_MESSAGE_INCORRECT_PASSWORD )};
                    if (Log.will(Log.ERROR)) Log.error(Log.stringify(err));
                    return done( null, false, err );
                }
                let headers = Registry.get('Headers');
                if (!headers.users) headers.users = {};
                if (!headers.users[account.username]) headers.users[account.username] = [];
                if (account.headers && 0 != account.headers.length) {
                    headers.users[account.username] = headers.users[account.username].concat(account.headers);
                }
                headers.users[account.username].push({ "header": "Authorization", "value": "?" });
                if (account.cookies && 0 != account.cookies.length) {
                    let cookies = Registry.get('Cookies');
                    if (!cookies.users) cookies.users = {};
                    if (!cookies.users[account.username]) cookies.users[account.username] = [];
                    cookies.users[account.username] = cookies.users[account.username].concat(account.cookies);
                }
                account.lastAccessTime = new Date();
                return done( null, { operation: operation, statusType: 'success', status: 200, username: account.username, message: I18n.get( Strings.LOGIN_SUCCESSFUL )} );
            }
            const err = { operation: operation, statusType: 'error', status: 401, message: I18n.format( I18n.get( Strings.ERROR_MESSAGE_INCORRECT_USER_NAME ), username )};
            if (Log.will(Log.ERROR)) Log.error(Log.stringify(err));
            return done( null, false, err );
        });
    }
    getAuthorization() {
        return (req, res, next) => {
            let operation = 'getAuthorization';
            let config = Registry.get('ServerConfig');
            if ((!this.accounts)
            || (!req || !req.url)
            || (!config)) {
                const err = { operation: operation, statusType: 'error', status: 501, message: I18n.get( Strings.ERROR_MESSAGE_AUTHORIZATION_NOT_CONFIGURED )};
                if (Log.will(Log.ERROR)) Log.error(Log.stringify(err));
                res.status(err.status);
                res.send(Log.stringify(err))
                return;
            }
            if (!req || !req.user || !req.user.username){
                const err = { operation: operation, statusType: 'error', status: 401, message: I18n.get( Strings.ERROR_MESSAGE_LOGIN_REQUIRED )};
                if (Log.will(Log.ERROR)) Log.error(Log.stringify(err));
                res.status(err.status);
                res.send(Log.stringify(err))
                return;
            }

            let username = req.user.username;
            let account = this.accounts.map(account => (account.username === username? account : null )).reduce(reduce);
            if (!account) {
                const err = { operation: operation, statusType: 'error', status: 401, message: I18n.format( I18n.get( Strings.ERROR_MESSAGE_INCORRECT_USER_NAME ), username )};
                if (Log.will(Log.ERROR)) Log.error(Log.stringify(err));
                res.status(err.status);
                res.send(Log.stringify(err))
                return;
            }
            let url = req.url;
            let verb = req.header('Request Method');
            let map = ( configInfo ) => {
                if (!configInfo.authorization) return null;
                if (configInfo.path !== url) return null;
                if (!verb) return null;
                if ((configInfo.verb) && (configInfo.verb.toUpperCase() !== verb.toUpperCase())) return null;
                if ((!configInfo.verb) && ('GET' !== verb.toUpperCase())) return null;
                return configInfo.authorization;
            };
            let configInfo = null;
            if (config.mocks) configInfo = config.mocks.map(map).reduce(reduce);
            if (!configInfo && config.microservices) configInfo = config.microservices.map(map).reduce(reduce);
            if (!configInfo && config.endpoints) configInfo = config.endpoints.map(map).reduce(reduce);
            if (!configInfo && config.databaseConnections) {
                let mapDB = ( configInfo ) => {
                    if (!configInfo.authorization) return null;
                    if (!configInfo.name) return null;
                    if (!url.startsWith('/' + configInfo.name)) return null;
                    return configInfo.authorization;
                };
                configInfo = config.databaseConnections.map(mapDB).reduce(reduce);
            }
            if (!configInfo) return (next && next());
            let contains = (array, object) => {
                for (let loop = 0; loop < array.length; loop++) {
                    if (array[loop] === object) return true;
                }
                return false;
            };
            let mapAuthorized = ( userAuthGroup ) => { return contains(configInfo.groups, userAuthGroup); };
            let authorized = account.groups.map(mapAuthorized).reduce(reduce);
            if (!authorized) {
                const err = { operation: operation, statusType: 'error', status: 403, message: I18n.get( Strings.ERROR_MESSAGE_UNAUTHORIZED )};
                if (Log.will(Log.ERROR)) Log.error(Log.stringify(err));
                res.status(err.status);
                res.send(Log.stringify(err))
                return;
            }
            if (hasExpired(account.lastAccessTime)) {
                const err = { operation: operation, statusType: 'error', status: 403, message: I18n.get( Strings.ERROR_MESSAGE_LOGIN_EXPIRED )};
                let headers = Registry.get('Headers');
                if (headers && headers.users && headers.users[account.username]) this.arrayRemove(headers.users[account.username], "Authorization");
                if (Log.will(Log.ERROR)) Log.error(Log.stringify(err));
                res.status(err.status);
                res.send(Log.stringify(err))
                return;
            }
            account.lastAccessTime = new Date();
            next && next();
        }
    }
    hasExpired(startDate) {
        if (!startDate) return true;
        let startTime = startDate.getTime();
        if (!startTime) return true;
        startTime /= 1000;
        let currentTime = new startDate().getTime() / 1000;
        let config = Registry.get('ServerConfig');
        let expireTime = ((config && config.loginExpire)? config.loginExpire : DEFAULT_EXPIRE_TIME );
        return currentTime - startTime >= expireTime ;
    }
    arrayRemove(arr, value) {
        return arr.filter(function(ele){
            return ele != value;
        });
    }
}

module.exports = LocalStrategy;
