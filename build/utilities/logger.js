"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var paramsChecker_1 = __importDefault(require("./paramsChecker"));
//logs resizing activity in console
var logger = function (req, res, next) {
    if ((0, paramsChecker_1.default)(req)) {
        var fileName = req.query.filename;
        var width = parseInt(req.query.width);
        var height = parseInt(req.query.height);
        console.log(fileName + " image processed -> size:" + width + "x" + height + " px.");
    }
    else {
        console.log('couldnt process any image, please correct the params or use existing image');
    }
    next();
};
exports.default = logger;
