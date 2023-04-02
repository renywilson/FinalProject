const Sequelize=require('sequelize');
const sequelize=require('../util/database');


const User=sequelize.define('signup',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  name:{type:Sequelize.STRING},
  email:{
    type:Sequelize.STRING,
    unique:true,

  },
  password:{
    type:Sequelize.STRING,
    unique:true,

  }
});
module.exports=User;
