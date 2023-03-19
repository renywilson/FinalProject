const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const User=sequelize.define('user',{
  id:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allowNull:false,
    primaryKey:true
  },
  candyname:{type:Sequelize.STRING},
  description:{

    type:Sequelize.STRING,
  

  },
price:{

    type:Sequelize.INTEGER,

  },
  qty:{

    type:Sequelize.INTEGER,

  }
});
module.exports=User;