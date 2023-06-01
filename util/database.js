const dotenv = require('dotenv');  
dotenv.config();
var mysql = require('mysql');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD,{
    dialect: 'mysql',
    host: 'localhost',
    
});
console.log('Database connected');
module.exports = sequelize;
