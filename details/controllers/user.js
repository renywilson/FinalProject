

const User = require('../models/User')


const getUser=async(req,res,next)=>{
  
   
    const user=await User.findAll();

    console.log(user);
res.status(200).json(user);

    }
    
const addUser=async(req,res,next)=>
{

    const pname=req.body.pname;
   
    const price=req.body.price;
  
    const data=await User.create({pname:pname,price:price} );
     console.log(data);
    
  res.status(201).json({Detail:data});
  

}


const deleteUser=async(req,res,next)=>{
  
    const uid=req.params.id;
    console.log(uid);
    await User.destroy({where:{ id:uid}});
    res.sendStatus(200).json(err);
    
    }
    const data=User.findAll(price)



module.exports={
    getUser,
    addUser,
   
   deleteUser
};