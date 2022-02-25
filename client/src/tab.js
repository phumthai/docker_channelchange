import React from "react";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import App1 from './App1.js'
import App2 from './App2.js'
import App3 from './dl.js'
import Count from './count.js'
import TotalAP from './totalAP.js'
import Ch245 from './ch245f.js'
import Avg from './avg.js'
import Dates from './date.js'
const Home = props => {
    const { match, history } = props;
    const { params } = match;
    const { page } = params;
    const tabNameToIndex = {
      0: "Dates",
      1: "Frequency",
      2: "Area",
      3: "APname",
      4: "Total",
      5: "245",
      6: "Average",
      7: "Download"
    };
  
    const indexToTabName = {
      dates: 0,
      frequency: 1,
      area: 2,
      apname: 3,
      total: 4,
      c245: 5,
      average: 6,
      download: 7,
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
            <Tab label="Date" />
            <Tab label="Change Frequency" />
            <Tab label="Most Area Change" />
            <Tab label="Most AP Name" />
            <Tab label="Devices Total" />
            <Tab label="Channal Devices Change" />
            <Tab label="Average" />
            <Tab label="Download" />
          </Tabs>
        </AppBar>
        {selectedTab === 0 && <Dates />}
        {selectedTab === 1 && <App1 />}
        {selectedTab === 2 && <App2 />}
        {selectedTab === 3 && <Count/>}
        {selectedTab === 4 && <TotalAP />}
        {selectedTab === 5 && <Ch245 />}
        {selectedTab === 6 && <Avg />}
        {selectedTab === 7 && <App3 />}
      </>
    );
  };
  
export default Home;