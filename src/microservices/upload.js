let path = require('path');
let files = require ( '../util/files.js' );

const FILE_PATH = path.resolve('./public/files');
class Upload {
    do(params) {
        return new Promise (( inResolve, inReject ) => {
            const fileName = ((params.params.name)? params.params.name : "filename");
            const fullFileName = path.join(FILE_PATH, fileName);
            if ( files.existsSync( fullFileName ) ) {
                const error = {
                    title: fileName,
                    message: "Conflict: File Already Exists.",
                    error: { status: 409 }
                };
                inReject && inReject ({
                    status: 409,
                    viewName: 'error',
                    viewObject: error,
                });
                return;
            }
            try {
                let uploadedFile = params.files['filename'];
                uploadedFile.mv(fullFileName, (err) => {
                    if (err) {
                        const error = { message: "Error uploading file.", error: { status: 500, stack: err.stack} };
                        inReject && inReject ({
                            status: 500,
                            viewName: 'error',
                            viewObject: error,
                        });
                        return;
                    }
                    inResolve && inResolve({
                        status: 200,
                        viewName: 'message',
                        viewObject: {title: fileName, message: "Upload complete.", status: 200},
                    });
                });
            } catch (err) {
                const error = { message: "Error uploading file.", error: { status: 500, stack: err.stack} };
                inReject && inReject ({
                    status: 500,
                    viewName: 'error',
                    viewObject: error,
                });
            }
        });
    }
}
module.exports = Upload;
