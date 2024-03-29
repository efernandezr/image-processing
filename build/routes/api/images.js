"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var imageResize_1 = __importDefault(require("../../utilities/imageResize"));
var config_1 = __importDefault(require("../../config"));
var imgExist_1 = __importDefault(require("../../utilities/imgExist"));
var paramsChecker_1 = __importDefault(require("../../utilities/paramsChecker"));
var logger_1 = __importDefault(require("../../utilities/logger"));
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var getExtention_1 = __importDefault(require("../../utilities/getExtention"));
var images = express_1.default.Router();
var fullDirectoryPath = path_1.default.join(config_1.default.ASSETS_PATH, 'full');
var thumbDirectoryPath = path_1.default.join(config_1.default.ASSETS_PATH, 'thumb');
images.get('/', logger_1.default, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var fileName, width, height, files, extention, outputImagePath, fileExist, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 8, , 9]);
                if (!(0, paramsChecker_1.default)(req)) return [3 /*break*/, 6];
                fileName = req.query.filename;
                width = parseInt(req.query.width);
                height = parseInt(req.query.height);
                files = fs_1.default.readdirSync(fullDirectoryPath);
                return [4 /*yield*/, (0, getExtention_1.default)(files, fileName)];
            case 1:
                extention = _a.sent();
                //checks if file was found in folder /full
                if (extention == undefined) {
                    res
                        .status(200)
                        .send('Image name doesnt exist in /full folder, please check');
                }
                outputImagePath = thumbDirectoryPath + "/" + fileName + width + "X" + height + "_thumb" + extention;
                return [4 /*yield*/, (0, imgExist_1.default)(outputImagePath)];
            case 2:
                fileExist = _a.sent();
                if (!!fileExist) return [3 /*break*/, 4];
                return [4 /*yield*/, (0, imageResize_1.default)("" + fileName, width, height, extention)];
            case 3:
                _a.sent();
                res.status(200).sendFile(outputImagePath);
                return [3 /*break*/, 5];
            case 4:
                res.status(200).sendFile(outputImagePath);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                res
                    .status(200)
                    .send('Image parameters specified are not correct, please check path structure and info');
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                err_1 = _a.sent();
                console.log(err_1);
                res
                    .status(200)
                    .sendFile('error while processing image path, please try again');
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); });
exports.default = images;
