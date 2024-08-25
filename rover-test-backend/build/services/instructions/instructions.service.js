"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instructionsService = exports.InstructionsService = void 0;
const moviment_model_1 = require("../../models/moviment.model");
const failed_precondition_error_1 = require("./errors/failed-precondition.error");
const types_1 = require("./types");
const helper_1 = require("./utils/helper");
const LAND_LIMIT = 100;
class InstructionsService {
    rotate(currentPosition, instruction) {
        return {
            x: currentPosition.x,
            y: currentPosition.y,
            direction: helper_1.positionsMapping[currentPosition.direction][instruction]
        };
    }
    validateInstructions(instructions) {
        const isInvalid = new RegExp(/[^(LRM)]/g).test(instructions); // check if any character is different than L, R or M
        if (isInvalid)
            throw new failed_precondition_error_1.FailedPreconditionError('Invalid instruction format');
    }
    runInstruction(currentPosition, instruction) {
        switch (instruction) {
            case types_1.Instruction.L:
            case types_1.Instruction.R:
                return this.rotate(currentPosition, instruction);
            case types_1.Instruction.M:
                return this.move(currentPosition);
        }
    }
    move(currentPosition) {
        switch (currentPosition.direction) {
            case types_1.Direction.N: return this.moveNorth(currentPosition);
            case types_1.Direction.E: return this.moveEast(currentPosition);
            case types_1.Direction.S: return this.moveSouth(currentPosition);
            case types_1.Direction.W: return this.moveWest(currentPosition);
        }
    }
    moveNorth(currentPosition) {
        if (currentPosition.y === LAND_LIMIT)
            throw new failed_precondition_error_1.FailedPreconditionError('Invalid moviment');
        return {
            ...currentPosition,
            y: currentPosition.y + 1
        };
    }
    moveSouth(currentPosition) {
        if (currentPosition.y === 0)
            throw new failed_precondition_error_1.FailedPreconditionError('Invalid moviment');
        return {
            ...currentPosition,
            y: currentPosition.y - 1
        };
    }
    moveEast(currentPosition) {
        if (currentPosition.x === LAND_LIMIT)
            throw new failed_precondition_error_1.FailedPreconditionError('Invalid moviment');
        return {
            ...currentPosition,
            x: currentPosition.x + 1
        };
    }
    moveWest(currentPosition) {
        if (currentPosition.x === 0)
            throw new failed_precondition_error_1.FailedPreconditionError('Invalid moviment');
        return {
            ...currentPosition,
            x: currentPosition.x - 1
        };
    }
    async runBulkInstructions(currentPosition, instructions) {
        if (instructions.length === 0)
            return currentPosition;
        const instruction = instructions[0];
        const nextPos = this.runInstruction(currentPosition, instruction);
        await moviment_model_1.MovimentModel.create({ ...nextPos, roverId: 1 });
        return this.runBulkInstructions(nextPos, instructions.slice(1, instructions.length));
    }
    async calculateFinalPosition(initialPosition, instructions) {
        this.validateInstructions(instructions);
        const finalPosition = await this.runBulkInstructions(initialPosition, instructions.split(''));
        return finalPosition;
    }
}
exports.InstructionsService = InstructionsService;
exports.instructionsService = new InstructionsService();
//# sourceMappingURL=instructions.service.js.map