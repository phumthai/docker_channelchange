import React from 'react';
import App1 from './App1.js'
import App2 from './App2.js'
import App3 from './dl.js'
import Count from './count.js'
import TotalAP from './totalAP.js'
import Ch245 from './ch245f.js'
import Avg from './avg.js'

const NavBar = () => {
    return(
        <div className="App">
            <App3 />
            <App1 />
            <App2 />
            <Count />
            <TotalAP />
            <Ch245 />
            <Avg />
        </div>
    )
}

export default NavBar;