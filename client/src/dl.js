import axios from "axios";
import { useState } from "react";
import { CSVLink } from "react-csv";

function App(){
    const [dataList,setDataList] = useState([])
    const getData = ()=>{
        axios.get('http://localhost:3001/a').then((res)=>{
            setDataList(res.data)
        })
    }

    console.log(dataList)
    const header = [
        {label: 'id',key:'id'},
        {label: 'date',key:'date'},
        {label: 'time',key:'time'},
        {label: 'oid',key:'name'},
        {label: 'channel24',key:'channel24'},
        {label: 'power24',key:'power24'},
        {label: 'channel5',key:'channel5'},
        {label: 'power5',key:'power5'},
        {label: 'b24',key:'b24'},
        {label: 'b5',key:'b5'},
        {label: 'apgroup',key:'apgroup'},
    ]
    const csvReport = {
        filename: 'Report.csv',
        header: header,
        data: dataList
    }



    return (
        <div className="datacollect">
            <CSVLink onLoad={getData} {...csvReport}>Report to CSV</CSVLink>     
        </div>
    );
}

export default App;