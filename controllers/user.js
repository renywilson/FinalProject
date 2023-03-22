

const User = require('../models/User')


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
    else
    {
   await User.create({name:name,email:email,password:password} );
    console.log(name);
    
    
    res.status(201).json({message:"Sucessfully Registerd"});
    }
}
catch (err)
{
   res.status(500).json({
        Error:'Existing User'})
  
}}

const login=async(req,res)=>{
    try{
        const{email,password}=req.body;

            if(isstringinvalid(email)||isstringinvalid(password))
                {
                     return res.status(400).json({message:'E-mailid or password is missing',success:false})
                }
   console.log(password);
const user=await User.FindAll({where:{email}})
        if (user.length>0)
            {
            if(user[0].password===password)
            {
             res.status(200).json({success:true,message:'User loggedin Sucessfully'})
            }
             else
             {
             return res.status(400).json({success:false,message:'password incorrect'})
             }
            }
      else{
    return res.status(404).json({success:false,message:'User doesnot exist'})
        }
    }
    catch(err)
    {
        res.status(500).json({message:err,success:false})

    }
}
module.exports={
   
    addUser,
    login
   
};