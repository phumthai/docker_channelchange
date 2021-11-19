const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
require('dotenv').config()

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

app.get('/a',(req,res)=>{
    db.query("SELECT * FROM ap_channal_data", (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

app.listen('3001',()=>{
    console.log("Server is running on port 3001");
})
