import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav.js'
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Nav />
        </Router>
    </React.StrictMode> 
    ,document.getElementById('root')
);