const express=require('express');//imported
const bodyParser=require('body-parser');
const app=express();
const adminRoutes=require('./Routers/admin');
const shopRoutes=require('./Routers/shop');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>');
});

app.listen(3000);