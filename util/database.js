

const Sequelize = require('sequelize');
const sequelize = new Sequelize('bookingapp', 'root', 'Reniwilson', {
    dialect: 'mysql',
    host: 'localhost',
    
});
console.log('bd connected');
module.exports = sequelize;
