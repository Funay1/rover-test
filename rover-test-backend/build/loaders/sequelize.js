"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = exports.getSequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const moviment_model_1 = require("../models/moviment.model");
let sequelize;
const models = [
    moviment_model_1.MovimentModel
];
function getSequelize() {
    console.log('here', {
        host: process.env.DB_HOST,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: Number(5432),
        dialect: "postgres",
    });
    if (!sequelize) {
        sequelize = new sequelize_typescript_1.Sequelize({
            host: process.env.DB_HOST,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: Number(5432),
            dialect: "postgres",
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            }
        });
    }
    return sequelize;
}
exports.getSequelize = getSequelize;
async function init() {
    if (!sequelize) {
        sequelize = getSequelize();
    }
    sequelize.addModels(models);
    await sequelize.authenticate();
}
exports.init = init;
//# sourceMappingURL=sequelize.js.map