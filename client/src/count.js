import axios from "axios";
import React, { useState, useEffect } from 'react';

function App(){
    const [apcount, setapcount] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/b').then((res)=>{
            setapcount(res.data)
        })
    },[])
    




    return (
        <div>
            <h1>Top 10 AP Change in 24 hours</h1>
            {apcount.map((val)=>{
                return <h3>AP Name: {val.apname} | {val.apcount}</h3>
            })}
        </div>
    );
}

export default App;