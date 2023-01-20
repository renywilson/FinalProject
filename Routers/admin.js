const express=require('express');
const router=express.Router();
router.get('/add-product',(req,res,next)=>{
   
    res.setHeader().send('<form action="/product" method="POST"><label>Product</label><input type="text" name="title"><br><label>Quantity</label><input type="number" name="size"><br><button type="submit">Add Product</form>');

});
router.post('/product',(req,res,next)=>{//post method is used for only active this fn after post method..otherwise it will work all time...http post,get,put are can use
    console.log(req.body);

    res.redirect('/');
});
module.exports=router;