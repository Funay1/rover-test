"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./http/module/app.module");
const sequelize_1 = require("./loaders/sequelize");
(async () => {
    // console.log('env', process.env);
    await (0, sequelize_1.init)();
    await (0, app_module_1.startHttpServer)(Number(process.env.PORT ?? 3000));
})();
//# sourceMappingURL=main.js.map