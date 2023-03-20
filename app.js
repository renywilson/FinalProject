const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const sequelize=require('./util/database');
const User=require('./models/User');
var cors=require('cors');

const errorController = require('./controllers/error');
const db = require('./util/database');

app.use(cors());
app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/user');

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user',userRoutes);




app.use(errorController.get404);
sequelize.sync().then(result=>{
    //console.log(result);
    app.listen(5000);
    
})

.catch((err)=>console.log(err));

