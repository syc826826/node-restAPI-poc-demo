"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
exports.Db = new sequelize_typescript_1.Sequelize({
    database: 'pgtest',
    dialect: 'postgres',
    username: 'postgres',
    password: 'merlin',
    storage: ':memory:'
});
