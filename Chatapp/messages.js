const express=require('express');
const router=express.Router();
const fs=require('fs');

router.get('/messages',(req,res)=>{
 // var name=localStorage.getItem('username');
  
  fs.readFile('message1.txt', {encoding: "utf-8"},(err, data) => {
    if (err)
    {
      console.log("Showing error in reading");
    } 
//console.log(data);


res.send(
  `${data}<form action="/messages/messages" method="POST"><input type="text" name="message"><br><button type="submit">send</form>`);
});
  
});

 

 
router.post('/messages',(req,res)=>{//post method is used for only active this fn after post method..otherwise it will work all time...http post,get,put are can use
   
    //console.log(req.body.message);


  
  
    fs.writeFile('message1.txt',`${localStorage.getItem('username')}:${req.body.message}<br>`,{flag:'a'},(err, data) => {
            if (err)
            {console.log("Showing error");
        } });

   
    res.redirect('/messages/messages'); 

 

});
module.exports=router;
 