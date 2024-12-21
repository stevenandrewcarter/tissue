"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tissue_1 = __importDefault(require("../src/tissue"));
const tissue = new tissue_1.default();
tissue.cell('shell', { cmd: 'echo', args: 'Hello World!' }, (res) => {
    console.log(res);
    return;
});
//# sourceMappingURL=basic_cell.js.map