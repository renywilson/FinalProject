const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const User=sequelize.define('userdetail',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  pname:{type:Sequelize.STRING},
 
price:{

    type:Sequelize.INTEGER,

  },
  
});
module.exports=User;