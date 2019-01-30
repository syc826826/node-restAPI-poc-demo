import { Sequelize } from 'sequelize-typescript'

export const Db = new Sequelize({
    database: 'pgtest',
    dialect: 'postgres',
    username: 'postgres',
    password: 'merlin',
    storage: ':memory:'
    // modelPaths: [__dirname + '/**/*.model.ts']
});