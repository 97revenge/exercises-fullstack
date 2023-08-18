"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const modelWhileAplyer_1 = __importDefault(require("./modelWhileAplyer"));
const styleForAplyer_1 = __importDefault(require("./styleForAplyer"));
function controllerIfElseAplyer() {
    return {
        model: (0, modelWhileAplyer_1.default)(),
        style: (0, styleForAplyer_1.default)(),
    };
}
exports.default = controllerIfElseAplyer;
