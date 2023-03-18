const express=require('express');//imported
const app=express();
const bodyParser=require('body-parser');

const loginRoutes=require('./Chatapp/login');
const userRoutes=require('./Chatapp/messages');
app.use(bodyParser.urlencoded({extended:false}));
app.use('/login',loginRoutes);

app.use('/messages',userRoutes);


app.listen(7000);