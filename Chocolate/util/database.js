

const Sequelize = require('sequelize');
const sequelize = new Sequelize('candy', 'root', 'Reniwilson', {
    dialect: 'mysql',
    host: 'localhost',
    
});
console.log('Database connected');
module.exports = sequelize;
