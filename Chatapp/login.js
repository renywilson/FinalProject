const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{

   // res.send('<form action="/login/messages" method="POST"><label>Enter Username</label><input type="text" name="username"><br><button type="submit">Login</form>');
   res.send('<form onsubmit="localStorage.setItem(`username`, document.getElementById(`username`).value)" action="/login/messages" method="POST"><input id="username" type="text" name="title"><button type="submit">Login</button></form>');

});
router.post('/messages',(req,res,next)=>{//post method is used for only active this fn after post method..otherwise it will work all time...http post,get,put are can use
    //console.log(req.body);

res.redirect('/messages/messages');
});
module.exports=router; 