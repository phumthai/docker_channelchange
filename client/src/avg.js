import axios from "axios";
import React, { useState, useEffect } from 'react';

function App(){
    const [apcount, setapcount] = useState([])
    const storage = require('node-sessionstorage')
    var sdate = storage.getItem('date')
    useEffect(()=>{
        axios.get('http://localhost:3001/f/'+sdate).then((res)=>{
            setapcount(res.data)
        })
    },[])
    




    return (
        <div>
            <h1>Average change in {sdate}</h1>
            {apcount.map((val)=>{
                return <h3>{val.avg}</h3>
            })}
        </div>
    );
}

export default App;