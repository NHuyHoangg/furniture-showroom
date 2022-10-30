const express = require('express');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req,res)=>{
    res.send('i love u');
})

// test connect
app.use('/api/test', require('./test'));

//api route
/**
    Phân route theo từng nhóm
**/

//auth
app.use('/api/auth', require('./controller/AuthController'))
//product

//


app.listen(8888, ()=>{
    console.log('serve started running on 3000');
})