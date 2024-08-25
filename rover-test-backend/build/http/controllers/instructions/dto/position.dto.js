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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PositionDto = exports.Direction = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
var Direction;
(function (Direction) {
    Direction["N"] = "N";
    Direction["E"] = "E";
    Direction["S"] = "S";
    Direction["W"] = "W";
})(Direction || (exports.Direction = Direction = {}));
class PositionDto {
}
exports.PositionDto = PositionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        return Number(value);
    }),
    __metadata("design:type", Number)
], PositionDto.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0 }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        return Number(value);
    }),
    __metadata("design:type", Number)
], PositionDto.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'N' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_transformer_1.Transform)(({ value }) => {
        return value.toUpperCase();
    }),
    (0, class_validator_1.IsEnum)(Direction),
    __metadata("design:type", String)
], PositionDto.prototype, "direction", void 0);
//# sourceMappingURL=position.dto.js.map