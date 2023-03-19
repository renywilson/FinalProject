

const User = require('../models/User')


const getUser=async(req,res,next)=>{
  
   
    const user=await User.findAll();
    console.log(user);
res.status(200).json(user);

    }
    
const addUser=async(req,res,next)=>
{

    const candyname=req.body.candyname;
    const description=req.body.description;
    const price=req.body.price;
    const qty=req.body.qty;
    const data=await User.create({candyname:candyname,description:description,price:price,qty:qty} );
     console.log(data);
    
    res.status(201).json({Detail:data});
  

}

const deleteUser=async(req,res,next)=>{
  
    const uid=req.params.id;
    console.log(uid);
    await User.destroy({where:{ id:uid}});
    res.sendStatus(200).json(err);
    
    }
    const buyOne=async(req,res,next)=>{
     
            const uid=req.params.id;
            const qty=req.params.qty;
            console.log(uid);

            await User.update  ( Set,{qty:qty-1},{where:{ id:uid}});
            res.sendStatus(200).json(err);
            console.log(qty);
           
    }

module.exports={
    getUser,
    addUser,
   
    buyOne,
    //buyTwo,
    //buyThree
};