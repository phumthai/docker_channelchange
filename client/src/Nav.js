// import React from 'react';
// import App1 from './App1.js'
// import App2 from './App2.js'
// import App3 from './dl.js'
// import Count from './count.js'
// import TotalAP from './totalAP.js'
// import Ch245 from './ch245f.js'
// import Avg from './avg.js'

// const NavBar = () => {
//     return(
//         <div className="App">
//             <App3 />
//             <App1 />
//             <App2 />
//             <Count />
//             <TotalAP />
//             <Ch245 />
//             <Avg />
//         </div>
//     )
// }

// export default NavBar;

import React from "react";
// import "./styles.css";
import Tab from "./tab.js";
import { Route, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Redirect exact from="/" to="/dates" />
      <Route exact path="/:page?" render={props => <Tab {...props} />} />
    </Switch>
  );
}