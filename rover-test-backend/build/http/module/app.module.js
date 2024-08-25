"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySettings = exports.startHttpServer = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const helmet_1 = __importDefault(require("helmet"));
const instructions_controller_1 = require("../controllers/instructions/instructions.controller");
const http_error_interceptors_1 = require("../interceptors/http-error.interceptors");
let server;
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            instructions_controller_1.InstructionsController
        ],
    })
], AppModule);
async function startHttpServer(port = 3000) {
    server = await core_1.NestFactory.create(AppModule);
    applySettings(server);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Rover instruction API')
        .setDescription('This API should return all Rover instruction calculation.')
        .setVersion('1.0')
        .addTag('Rover')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(server, config);
    swagger_1.SwaggerModule.setup('docs', server, document);
    await server.listen(port);
    console.log(`HTTP server started and listening on port ${port}`);
}
exports.startHttpServer = startHttpServer;
function applySettings(app) {
    app.enableCors();
    app.use((0, helmet_1.default)());
    app.enableShutdownHooks();
    app.enableVersioning({
        type: common_1.VersioningType.URI,
        defaultVersion: ['1'],
        prefix: 'v',
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.useGlobalInterceptors(new http_error_interceptors_1.ErrorsInterceptor());
}
exports.applySettings = applySettings;
//# sourceMappingURL=app.module.js.map