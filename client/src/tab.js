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
import Date2 from './date2.js'
import { SortingTable } from "./table/sortingTable.js";
import { FilteringTable } from "./table/fillterTable.js";
const Home = props => {
    const { match, history } = props;
    const { params } = match;
    const { page } = params;
    const tabNameToIndex = {
      0: "Date2",
      1: "Frequency",
      2: "Area",
      3: "APcount",
      4: "Fulldata",
      5: "Total",
      6: "Download",
    };
  
    const indexToTabName = {
      dates: 0,
      frequency: 1,
      area: 2,
      sorting: 3,
      fulldata: 4,
      total: 5,
      download: 6,
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
            <Tab label="AP count" />
            <Tab label="Full Data" />
            <Tab label="Other" />
            <Tab label="Download" />
          </Tabs>
        </AppBar>
        {selectedTab === 0 && <Date2 />}
        {selectedTab === 1 && <App1 />}
        {selectedTab === 2 && <App2 />}
        {selectedTab === 3 && <SortingTable />}
        {selectedTab === 4 && <FilteringTable />}
        {selectedTab === 5 && <TotalAP />}
        {selectedTab === 6 && <App3 />}
      </>
    );
  };
  
export default Home;