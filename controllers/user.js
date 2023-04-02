

const User = require('../models/User')
const bcrypt = require('bcrypt');

const getUser=async(req,res,next)=>{
  
   
    const user=await User.findAll();
    console.log(user);
res.status(200).json(user);

    }
     function isStringInvalid(string)
{
if(string==undefined||string.length===0)
{
    return true;
}
else {return false;}
}
const addUser=async(req,res,next)=>
{
    try{
        const name=req.body.name;
        const email=req.body.email;
        const password=req.body.password;
    
        if(isStringInvalid(name)||isStringInvalid(email)||isStringInvalid(password))
        {
            return res.status(400).json({err:'bad parameters,something missing'})
        }
    
    else{
         const saltround=10;
            bcrypt.hash(password,saltround,async(err,hash)=>{
                console.log(err);
    
        
       await User.create({name:name,email:email,password:password} );
        console.log(name);
        
        
        res.status(201).json({message:"Sucessfully Registerd"});
              })
            }
           }
    
    catch (err)
   {
     res.status(500).json({
           Error:'Existing User'})
      
   }
    }
    
  
const login = async (req, res) => {
    try{
    const { email, password } = req.body;
    if(isStringInvalid(email) || isStringInvalid(password)){
        return res.status(400).json({message: 'EMail id or password is missing ', success: false})
    }
    console.log(password);
    const user  = await User.findAll({ where : { email }})
        if(user.length > 0){
           bcrypt.compare(password, user[0].password, (err, result) => {
           if(err){
            throw new Error('Something went wrong')
           }
            if(result === true){
                return res.status(200).json({success: true, message: "User logged in successfully"})
            }
            else{
            return res.status(400).json({success: false, message: 'Password is incorrect'})
           }
        })
        } else {
            return res.status(404).json({success: false, message: 'User Doesnot exitst'})
        }
    }catch(err){
        res.status(500).json({message: err, success: false})
    }
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
    editUser,
    login
};