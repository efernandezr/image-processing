"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageResize_1 = __importDefault(require("../../utilities/imageResize"));
var images = express_1.default.Router();
images.get('/', function (req, res) {
    res.send('Hello, world images!');
});
(0, imageResize_1.default)('encenadaport', 200, 200);
exports.default = images;
