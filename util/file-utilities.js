'use strict';

var fs = require("fs");

class Utilities {
    /**
     * Reads a file and returns the contents.
     * @param inFilepath {String} The path to the file.
     * @param inEncoding {String} The file's encoding. Defaults to utf8.
     * @returns {String} If the encoding option is specified then this
     * function returns a string. Otherwise it returns a buffer.
     */
    static readFileSync(inFilepath, inEncoding) {

        if (typeof (inEncoding) == 'undefined') {
            inEncoding = 'utf8';
        }
        return fs.readFileSync(inFilepath, inEncoding);
    }

    /**
     * Writes a file.
     * @param inFilepath {String} The path to the file.
     * @param inText {String} The file's text.
     * @returns {String} The file's contents.
     */
    static writeFileSync(inFilepath, inText) {
        return fs.writeFileSync(inFilepath, inText);
    }

    /**
     * Determines if a file exists.
     * @param inFilepath {String} The path to the file.
     * @returns {Boolean} True if the file exists, false otherwise.
     */
    static existsSync(inFilepath) {
        return fs.existsSync(inFilepath);
    }

    /**
     * Deletes a file.
     * @param inFilepath {String} The path to the file.
     */
    static deleteSync(inFilepath) {
        fs.unlinkSync(inFilepath);
    }

}

module.exports = Utilities;