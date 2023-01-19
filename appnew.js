const express=require('express');//imported

const app=express();


app.use('/',(req,res,next)=>{
    console.log('this is always run...');
    next();
});
app.use('/add-product',(req,res,next)=>{
    console.log('in the middleware');
    res.send('<h1>Product page added</>');

});
app.use('/',(req,res,next)=>{
    console.log('in another middleware');
    res.send('<h1>Hello From Express....</h1>')
});
app.listen(3000);
