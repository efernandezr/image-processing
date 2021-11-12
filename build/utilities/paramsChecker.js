"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var paramsChecker = function (req) {
    var fileName = req.query.filename;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    if (fileName !== undefined && !isNaN(width) && !isNaN(height)) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = paramsChecker;
