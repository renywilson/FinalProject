const express=require('express');
const router=express.Router();

router.get('/',(req,res,next)=>{
//not adding '/shop' here ,only in appnew2 js...but on calling in local host we need to call localhost3000/shop 
    
    res.send('<h1>Hello From Express....</h1>')
});
module.exports=router;