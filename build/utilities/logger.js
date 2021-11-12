"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (req, res, next) {
    var fileName = req.query.filename;
    var width = parseInt(req.query.width);
    var height = parseInt(req.query.height);
    console.log(fileName + " image processed -> size:" + width + "x" + height + " px.");
    next();
};
exports.default = logger;
