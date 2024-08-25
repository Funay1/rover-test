"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstructionsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const instructions_service_1 = require("../../../services/instructions/instructions.service");
const error_response_dto_1 = require("./common/error-response.dto");
const instruction_request_dto_1 = require("./dto/instruction-request.dto");
const position_dto_1 = require("./dto/position.dto");
let InstructionsController = class InstructionsController {
    async calculateAPR(req, body) {
        console.log('here', body);
        const result = await instructions_service_1.instructionsService.calculateFinalPosition(body.initialPosition, body.instructions);
        // console.log('result', result);
        return result;
    }
};
exports.InstructionsController = InstructionsController;
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, common_1.HttpCode)(common_1.HttpStatus.PRECONDITION_FAILED),
    (0, swagger_1.ApiOperation)({
        description: 'Retrieve the APR rate.',
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Returns an object containing the APR rate.',
        type: position_dto_1.PositionDto,
    }),
    (0, swagger_1.ApiOkResponse)({
        description: 'Returns an object containing the error message',
        type: error_response_dto_1.ErrorResponseDto,
    }),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, instruction_request_dto_1.InstructionRequestDto]),
    __metadata("design:returntype", Promise)
], InstructionsController.prototype, "calculateAPR", null);
exports.InstructionsController = InstructionsController = __decorate([
    (0, common_1.Controller)('instructions'),
    (0, swagger_1.ApiTags)('instructions')
], InstructionsController);
//# sourceMappingURL=instructions.controller.js.map