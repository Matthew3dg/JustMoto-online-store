const { Sequelize } = require('sequelize');
const DB_NAME = 'just_moto';
const DB_USER = 'postgres';
const DB_PASSWORD = '0303667mtv';
const DB_HOST = 'localhost';
const DB_PORT = '5432';

module.exports = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
	dialect: 'postgres',
	host: DB_HOST,
	port: DB_PORT,
});
