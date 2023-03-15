const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const User=sequelize.define('user',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  expense:{type:Sequelize.STRING},
  description:{

    type:Sequelize.STRING,
  

  },
category:{

    type:Sequelize.STRING,

  }
});
module.exports=User;