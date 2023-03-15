

const User = require('../models/User')


const getUser=async(req,res,next)=>{
  
   
    const user=await User.findAll();
    console.log(user);
res.status(200).json(user);

    }
    
const addUser=async(req,res,next)=>
{

    const expense=req.body.expense;
    const description=req.body.description;
    const category=req.body.category;
    const data=await User.create({expense:expense,description:description,category:category} );
     console.log(data);
    
    res.status(201).json({userDetail:data});
  

}

const deleteUser=async(req,res,next)=>{
  
    const uid=req.params.id;
    console.log(uid);
    await User.destroy({where:{ id:uid}});
    res.sendStatus(200).json(err);
    
    }
    const editUser=async(req,res,next)=>{
     
            const uid=req.params.id;
            console.log(uid);
            await User.update({where:{ id:uid}});
            res.sendStatus(200).json(err);
    }

module.exports={
    getUser,
    addUser,
    deleteUser,
    editUser
};