"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positionsMapping = void 0;
const types_1 = require("../types");
exports.positionsMapping = {
    [types_1.Direction.N]: {
        [types_1.Instruction.L]: types_1.Direction.W,
        [types_1.Instruction.R]: types_1.Direction.E,
    },
    [types_1.Direction.E]: {
        [types_1.Instruction.L]: types_1.Direction.N,
        [types_1.Instruction.R]: types_1.Direction.S,
    },
    [types_1.Direction.S]: {
        [types_1.Instruction.L]: types_1.Direction.E,
        [types_1.Instruction.R]: types_1.Direction.W,
    },
    [types_1.Direction.W]: {
        [types_1.Instruction.L]: types_1.Direction.S,
        [types_1.Instruction.R]: types_1.Direction.N,
    },
};
//# sourceMappingURL=helper.js.map