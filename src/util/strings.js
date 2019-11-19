function Strings(){}
Strings.LOGIN_SUCCESSFUL = 0;
Strings.LISTENING_ON_PORT = 1;
Strings.RESERVERED1 = 2;
Strings.RESERVERED2 = 3;
Strings.RESERVERED3 = 4;
Strings.RESERVERED4 = 5;
Strings.RESERVERED5 = 6;
Strings.RESERVERED6 = 7;
Strings.RESERVERED7 = 8;
Strings.RESERVERED8 = 9;
Strings.RESERVERED9 = 10;
Strings.RESERVERED10 = 11;
Strings.RESERVERED11 = 12;
Strings.RESERVERED12 = 13;
Strings.RESERVERED13 = 14;
Strings.RESERVERED14 = 15;
Strings.RESERVERED15 = 16;
Strings.RESERVERED16 = 17;
Strings.RESERVERED17 = 18;
Strings.RESERVERED18 = 19;
Strings.RESERVERED19 = 20;
Strings.RESERVERED20 = 21;
Strings.RESERVERED21 = 22;
Strings.RESERVERED22 = 23;
Strings.RESERVERED23 = 24;
Strings.RESERVERED24 = 25;
Strings.RESERVERED25 = 26;
Strings.RESERVERED26 = 27;
Strings.RESERVERED27 = 28;
Strings.RESERVERED28 = 29;
Strings.RESERVERED29 = 30;
Strings.RESERVERED30 = 31;
Strings.RESERVERED31 = 32;
Strings.RESERVERED32 = 33;
Strings.RESERVERED33 = 34;
Strings.RESERVERED34 = 35;
Strings.RESERVERED35 = 36;
Strings.RESERVERED36 = 37;
Strings.RESERVERED37 = 38;
Strings.RESERVERED38 = 39;
Strings.RESERVERED39 = 40;
Strings.RESERVERED40 = 41;
Strings.RESERVERED41 = 42;
Strings.RESERVERED42 = 43;
Strings.RESERVERED43 = 44;
Strings.RESERVERED44 = 45;
Strings.RESERVERED45 = 46;
Strings.RESERVERED46 = 47;
Strings.RESERVERED47 = 48;
Strings.RESERVERED48 = 49;
Strings.RESERVERED49 = 50;
Strings.RESERVERED50 = 51;
Strings.RESERVERED51 = 52;
Strings.RESERVERED52 = 53;
Strings.RESERVERED53 = 54;
Strings.RESERVERED54 = 55;
Strings.RESERVERED55 = 56;
Strings.RESERVERED56 = 57;
Strings.RESERVERED57 = 58;
Strings.RESERVERED58 = 59;
Strings.RESERVERED59 = 60;
Strings.RESERVERED60 = 61;
Strings.RESERVERED61 = 62;
Strings.RESERVERED62 = 63;
Strings.RESERVERED63 = 64;
Strings.RESERVERED64 = 65;
Strings.RESERVERED65 = 66;
Strings.RESERVERED66 = 67;
Strings.RESERVERED67 = 68;
Strings.RESERVERED68 = 69;
Strings.RESERVERED69 = 70;
Strings.RESERVERED70 = 71;
Strings.RESERVERED71 = 72;
Strings.RESERVERED72 = 73;
Strings.RESERVERED73 = 74;
Strings.RESERVERED74 = 75;
Strings.RESERVERED75 = 76;
Strings.RESERVERED76 = 77;
Strings.RESERVERED77 = 78;
Strings.RESERVERED78 = 79;
Strings.RESERVERED79 = 80;
Strings.RESERVERED80 = 81;
Strings.RESERVERED81 = 82;
Strings.RESERVERED82 = 83;
Strings.RESERVERED83 = 84;
Strings.RESERVERED84 = 85;
Strings.RESERVERED85 = 86;
Strings.RESERVERED86 = 87;
Strings.RESERVERED87 = 88;
Strings.RESERVERED88 = 89;
Strings.RESERVERED89 = 90;
Strings.RESERVERED90 = 91;
Strings.RESERVERED91 = 92;
Strings.RESERVERED92 = 93;
Strings.RESERVERED93 = 94;
Strings.RESERVERED94 = 95;
Strings.RESERVERED95 = 96;
Strings.RESERVERED96 = 97;
Strings.RESERVERED97 = 98;
Strings.RESERVERED98 = 99;
Strings.ERROR_MESSAGE_AUTHENTICATION_NOT_CONFIGURED = 100;
Strings.ERROR_MESSAGE_AUTHORIZATION_NOT_CONFIGURED = 101;
Strings.ERROR_MESSAGE_UNAUTHORIZED = 102;
Strings.ERROR_MESSAGE_LOGIN_REQUIRED = 103;
Strings.ERROR_MESSAGE_INCORRECT_USER_NAME = 104;
Strings.ERROR_MESSAGE_INCORRECT_PASSWORD = 105;
Strings.ERROR_MESSAGE_INCORRECT_GROUP = 106;
Strings.ERROR_MESSAGE_LOGIN_EXPIRED = 107;
Strings.ERROR_MESSAGE_FILE_NAME = 108;
Strings.ERROR_MESSAGE_FILE_ALREADY_EXISTS = 109;
Strings.ERROR_MESSAGE_ACCOUNT_ADDED = 110;
Strings.ERROR_MESSAGE_ACCOUNT_ADD_FAILED = 111;
Strings.ERROR_MESSAGE_ACCOUNT_ADD_NOT_PROPERLY_CONFIGURED_DESTINATION_REQUIRED = 112;
Strings.COUNT = 113;

/**
 * Formats a string in a manner similar to sprintf or Microsoft's String.Format() method.
 *
 * @example
 * Strings.format('{0} is not {1}! {0} {2}', 'Sale', 'Sail');
 * results in:
 * Sale is not Sail! Sale {2}
 * @param inFormat {String} The format string.
 * @Param ... {String} ALL comma separated list of string parameters used to format the inFormat string.
 * @returns {String} The formatted string.
 */
Strings.format = function( inFormat ) {
    let aArgs = Array.prototype.slice.call ( arguments, 1 );
    return inFormat.replace(
        /{(\d+)}/g,
        function ( inMatch, inNumber ) {
            return typeof aArgs[ inNumber ] !== 'undefined' ? aArgs[ inNumber ] : inMatch;
        }
    );
}
module.exports = Strings;

