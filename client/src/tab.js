import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import App1 from './App1.js'
import App2 from './App2.js'
import App3 from './dl.js'
import Count from './count.js'
import TotalAP from './totalAP.js'
import Ch245 from './ch245f.js'
import Avg from './avg.js'

const Home = props => {
    const { match, history } = props;
    const { params } = match;
    const { page } = params;
  
    const tabNameToIndex = {
      0: "Frequency",
      1: "Area",
      2: "APname",
      3: "Total",
      4: "245",
      5: "Average",
      6: "Download"
    };
  
    const indexToTabName = {
      frequency: 0,
      area: 1,
      apname: 2,
      total: 3,
      c245: 4,
      average: 5,
      download: 6
    };
  
    const [selectedTab, setSelectedTab] = React.useState(indexToTabName[page]);
  
    const handleChange = (event, newValue) => {
      history.push(`/${tabNameToIndex[newValue]}`);
      setSelectedTab(newValue);
    };
  
    return (
      <>
        <AppBar position="static">
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label="Change Frequency" />
            <Tab label="Most Area Change" />
            <Tab label="Most AP Name" />
            <Tab label="Devices Total" />
            <Tab label="Channal Devices Change" />
            <Tab label="Average" />
            <Tab label="Download" />
          </Tabs>
        </AppBar>
        {selectedTab === 0 && <App1 />}
        {selectedTab === 1 && <App2 />}
        {selectedTab === 2 && <Count/>}
        {selectedTab === 3 && <TotalAP />}
        {selectedTab === 4 && <Ch245 />}
        {selectedTab === 5 && <Avg />}
        {selectedTab === 6 && <App3 />}
      </>
    );
  };
  
export default Home;