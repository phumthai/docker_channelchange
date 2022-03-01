import axios from "axios";
import React, { useState, useEffect } from 'react';

function App(){
    const [apcount, setapcount] = useState([])
    const storage = require('node-sessionstorage')
    var sdate = storage.getItem('date')
    useEffect(()=>{
        axios.get('http://localhost:3001/b/'+sdate).then((res)=>{
            setapcount(res.data)
        })
    },[])
    




    return (
        <div>
            <h1>Top 10 AP Change in {sdate}</h1>
            {apcount.map((val)=>{
                return <h3>AP Name: {val.apname} | {val.apcount}</h3>
            })}
        </div>
    );
}

export default App;