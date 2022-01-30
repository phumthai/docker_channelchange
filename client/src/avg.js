import axios from "axios";
import React, { useState, useEffect } from 'react';

function App(){
    const [apcount, setapcount] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3001/f').then((res)=>{
            setapcount(res.data)
        })
    },[])
    




    return (
        <div>
            <h1>Average change in last 24 hours(time)</h1>
            {apcount.map((val)=>{
                return <h3>{val.avg}</h3>
            })}
        </div>
    );
}

export default App;