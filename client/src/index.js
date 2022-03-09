import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './Nav.js'
import Login from './login.js';
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Login />
        </Router>
    </React.StrictMode> 
    ,document.getElementById('root')
);