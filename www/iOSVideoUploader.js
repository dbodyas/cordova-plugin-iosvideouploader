var exec = require('cordova/exec');

exports.getVideo = function(success, error) {
    exec(success, error, "iOSVideoUploader", "getVideo");
};
