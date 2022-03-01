import axios from "axios";
import React, { useState, useEffect } from 'react';

function App(){
    const [apcount, setapcount] = useState([])
    const storage = require('node-sessionstorage')
    var sdate = storage.getItem('date')
    useEffect(()=>{
        axios.get('http://localhost:3001/c/'+sdate).then((res)=>{
            setapcount(res.data)
        })
    },[])
    




    return (
        <div>
            <h1>Number of AP change in {sdate}</h1>
            {apcount.map((val)=>{
                return <h3>{val.cou}</h3>
            })}
        </div>
    );
}

export default App;