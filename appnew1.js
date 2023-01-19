
//adding body parsing and post method
const express=require('express');//imported
const bodyParser=require('body-parser');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/add-product',(req,res,next)=>{
   
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</form>');

});
app.post('/product',(req,res,next)=>{//post method is used for only active this fn after post method..otherwise it will work all time...http post,get,put are can use
    console.log(req.body);
    res.redirect('/');
});
app.use('/',(req,res,next)=>{
    
    res.send('<h1>Hello From Express....</h1>')
});
app.listen(3000);
