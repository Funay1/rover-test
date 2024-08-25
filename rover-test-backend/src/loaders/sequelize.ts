import { Sequelize } from "sequelize-typescript";
import { MovimentModel } from "../models/moviment.model";

let sequelize: Sequelize;

const models = [
    MovimentModel
]

export function getSequelize(): Sequelize {
  console.log('here', {
    host: process.env.DB_HOST!,
    username: process.env.DB_USER!,
    password: process.env.DB_PASSWORD!,
    database: process.env.DB_NAME!,
    port: Number(5432)!,
    dialect: "postgres",
  });
    if (!sequelize) {
      sequelize = new Sequelize({
        host: process.env.DB_HOST!,
        username: process.env.DB_USER!,
        password: process.env.DB_PASSWORD!,
        database: process.env.DB_NAME!,
        port: Number(5432)!,
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

export async function init(): Promise<void> {
    if (!sequelize) {
      sequelize = getSequelize();
    }
  
    sequelize.addModels(models);

    await sequelize.authenticate();

    await sequelize.sync()
}