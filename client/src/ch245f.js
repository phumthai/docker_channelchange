import axios from "axios";
import React, { useState, useEffect } from 'react';

function App(){
    const [apcount, setapcount] = useState([])
    const storage = require('node-sessionstorage')
    var sdate = storage.getItem('date')
    useEffect(()=>{
        axios.get('http://localhost:3001/e/'+sdate).then((res)=>{
            setapcount(res.data)
        })
    },[])
    




    return (
        <div>
            <h1>Channal 2.4 GHz Change in {sdate}</h1>
            {apcount.map((val)=>{
                return <h3>{val.c24}</h3>
            })}
            <h1>Channal 5 GHz Change in {sdate}</h1>
            {apcount.map((val)=>{
                return <h3>{val.c5}</h3>
            })}
        </div>
    );
}

export default App;