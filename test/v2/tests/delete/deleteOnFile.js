"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_js_1 = require("../../../../lib/index.js");
var _createFiles_1 = require("./.createFiles");
exports.default = (function (info, isValid) {
    var server1 = info.init(3);
    _createFiles_1.starter(info.startServer(), info, isValid, 'file1', index_js_1.v2.HTTPCodes.OK);
    _createFiles_1.starter(info.startServer(), info, isValid, 'folder1/file2', index_js_1.v2.HTTPCodes.OK);
    _createFiles_1.starter(info.startServer(), info, isValid, 'folder1/folder2/file3', index_js_1.v2.HTTPCodes.OK);
});