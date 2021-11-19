import React from 'react';
import App1 from './App1.js'
import App2 from './App2.js'
import App3 from './dl.js'

const NavBar = () => {
    return(
        <div className="App">
            <App3 />
            <App1 />
            <App2 />
        </div>
    )
}

export default NavBar;