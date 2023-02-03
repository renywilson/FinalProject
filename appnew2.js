const express=require('express');//imported
const bodyParser=require('body-parser');
const app=express();
const path = require('path');
const adminRoutes=require('./Routers/admin');
const shopRoutes=require('./Routers/shop');
const contactRoutes=require('./Routers/Contactus');
const sucessRoutes=require('./Routers/sucess');
app.use(bodyParser.urlencoded({extended:false}));
app.use(contactRoutes);
app.use(sucessRoutes);
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(5000);