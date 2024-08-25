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
exports.MovimentModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
let MovimentModel = class MovimentModel extends sequelize_typescript_1.Model {
    constructor() {
        super(...arguments);
        this.allowedUpdateKeys = new Set([
            'isEnabled',
        ]);
    }
};
exports.MovimentModel = MovimentModel;
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
        primaryKey: true,
        autoIncrement: true,
        unique: true,
    }),
    __metadata("design:type", Object)
], MovimentModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: 'X coordinate',
    }),
    __metadata("design:type", String)
], MovimentModel.prototype, "x", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: 'Y coordinate',
    }),
    __metadata("design:type", String)
], MovimentModel.prototype, "y", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        comment: 'Rover direction',
    }),
    __metadata("design:type", String)
], MovimentModel.prototype, "direction", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        type: sequelize_1.DataTypes.NUMBER,
        unique: true,
    }),
    __metadata("design:type", Number)
], MovimentModel.prototype, "roverId", void 0);
exports.MovimentModel = MovimentModel = __decorate([
    (0, sequelize_typescript_1.Table)({ comment: 'Model for rover moviment' })
], MovimentModel);
//# sourceMappingURL=moviment.model.js.map