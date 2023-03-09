

const User = require('../models/User')


const getUser=async(req,res,next)=>{
  
   
    const user=await User.findAll();
res.status(200).json({allUsers:user});

    }
    
const addUser=async(req,res,next)=>
{
/*try{
    if(!req.body.phonenumber){
        throw new Error('Phone number required');
    }*/
    const name=req.body.name;
    const email=req.body.email;
    const phonenumber=req.body.phonenumber;
    const data=await User.create({name:name,email:email,phonenumber:phonenumber} );
    console.log(name);
    console.log(data);
    res.status(201).json({newUserDetail:data});
//}
/*catch (err)
{
   res.status(500).json({
        error:err
   })
  
}*/}

const deleteUser=async(req,res,next)=>{
    // try{
        
    //     if(req.params.id=='undefined'){
    //     console.log("id missing");
    //     return res.status(400).json({err:'id missing'});
    //     }
        const uid=req.params.id;
        console.log(uid);
        await User.destroy({where:{ id:uid}});
        res.sendStatus(200).json(err);
        
       
       
        
    
    // catch{
    //     console.log(err);
    //     res.sendStatus(500).json(err);
    // }


    }
    const editUser=async(req,res,next)=>{
        // try{
            
        //     if(req.params.id=='undefined'){
        //     console.log("id missing");
        //     return res.status(400).json({err:'id missing'});
        //     }
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