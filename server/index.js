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

//get all
app.get('/a',(req,res)=>{
    db.query("SELECT * FROM ap_channal_data WHERE fulldate > DATE_SUB(NOW(), INTERVAL 24 HOUR)", (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

// get apname + group + top 10
app.get('/b',(req,res)=>{
    db.query("SELECT `apname`, COUNT(*) AS apcount FROM `ap_channal_data` WHERE fulldate > DATE_SUB(NOW(), INTERVAL 24 HOUR) GROUP BY `apname` ORDER BY 2 DESC LIMIT 10", (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }
    })
})

// get apname number
app.get('/c',(req,res)=>{
    //db.query("SELECT `apname` FROM `ap_channal_data` WHERE fulldate > DATE_SUB(NOW(), INTERVAL 30 DAY) GROUP BY `apname`", (err,result)=>{
    db.query("select count(*) as cou from (SELECT `apname` FROM `ap_channal_data` WHERE fulldate > DATE_SUB(NOW(), INTERVAL 24 HOUR) GROUP BY `apname`) as cou", (err,result)=>{     
        let c;
        if(err){
            console.log(err);
        }
        else{
            let da = Object.values(JSON.parse(JSON.stringify(result)))  // remove row data packet
            // let dd = da.map(function(obj){
            //     return obj.apname;
            // })
            // let ap = [];
            // for(let i=0;i<dd.length;i++){
            //     if(ap.includes(dd[i])==false){
            //         ap.push(dd[i]);
            //     }
            // }
            // let num = String(da.length);
            // let num2 = JSON.parse(JSON.stringify({
            //     value: num
            // }))
            // console.log(result)
            res.send(result);
        }
    })
})

//test send value after modifine
app.get('/d',(req,res)=>{
    //db.query("SELECT `apname` FROM `ap_channal_data` WHERE fulldate > DATE_SUB(NOW(), INTERVAL 30 DAY) GROUP BY `apname`", (err,result)=>{
    db.query("SELECT `apname` FROM `ap_channal_data` WHERE fulldate > DATE_SUB(NOW(), INTERVAL 24 HOUR) GROUP BY `apname`", (err,result)=>{     
        if(err){
            console.log(err);
        }
        else{
            let da = Object.values(JSON.parse(JSON.stringify(result)))  // remove row data packet
            let num = da.length;
            let text = '{"cou":'+num+'}';
            let num2 = JSON.parse(text);
            let ob = [];
            ob.push(num2);
            res.send(ob);
        }
    })
})

//get ap245
app.get('/e',(req,res)=>{
    db.query("SELECT `apname`,`channel24`, `b24`, `channel5`, `b5` FROM `ap_channal_data` WHERE fulldate > DATE_SUB(NOW(), INTERVAL 24 HOUR)", (err,result)=>{     
        if(err){
            console.log(err);
        }
        else{
            let da = Object.values(JSON.parse(JSON.stringify(result)))  // remove row data packet
            let n24=0;
            let n5=0;
            let apc=[];
            let a24 = da.map(function(obj){
                return obj.channel24;
            })
            let a5 = da.map(function(obj){
                return obj.channel5;
            })
            let ab24 = da.map(function(obj){
                return obj.b24;
            })
            let ab5 = da.map(function(obj){
                return obj.b5;
            })
            let apn = da.map(function(obj){
                return obj.apname;
            })
            for(let i=0;i<a24.length;i++){
                if(a24[i]!==ab24[i]){
                    n24++;
                    apc.push(apn[i])
                }
                if(a5!==ab5){
                    n5++;
                }
            }
            // console.log(da.length)
            // console.log(n24)
            // console.log(n5)
            // console.log(apc)
            let text = '{"c24":'+n24+'}';
            let text2 = '{"c5":'+n5+'}';
            let num = JSON.parse(text);
            let num2 = JSON.parse(text2);
            let ob = [];
            ob.push(num);
            ob.push(num2);
            res.send(ob);
        }
    })
})

//average
app.get('/f',(req,res)=>{
    db.query("SELECT `apname`, COUNT(*) AS apcount FROM `ap_channal_data` WHERE fulldate > DATE_SUB(NOW(), INTERVAL 24 HOUR) GROUP BY `apname` ORDER BY 2 DESC", (err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            let da = Object.values(JSON.parse(JSON.stringify(result)))
            let apco = da.map(function(obj){
                return obj.apcount;
            })
            let sum=0;
            for(let i=0;i<da.length;i++){
                sum += apco[i];
            }
            let avg = sum/da.length;
            let avg2 = String(avg);
            let text = '{"avg":'+avg2+'}';
            let num = JSON.parse(text);
            let ob = [];
            ob.push(num);
            console.log(sum)
            res.send(ob);
        }
    })
})

app.listen('3001',()=>{
    console.log("Server is running on port 3001");
})
