"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCounter = exports.counter = void 0;
exports.counter = {
    request: 0,
    response: 0,
    error: 0,
};
const updateCounter = (type) => {
    return exports.counter[type] += 1;
};
exports.updateCounter = updateCounter;
