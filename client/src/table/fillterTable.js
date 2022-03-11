import React, { useMemo , useState, useEffect} from 'react'
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import { COLUMNS2 } from './columns'
import axios from "axios";
import './table.css'
import { GlobalFilter } from './globalFilter'
import { setDate } from 'date-fns';


export const FilteringTable = () => {

  const [loading,setLoading] = useState(false);
  const [apdata, setapdata] = useState([])
  const storage = require('node-sessionstorage')
  var sdate = storage.getItem('date')

    
  useEffect(()=>{
      const loadPost = async () => {
          setLoading(true);
          const response = await axios.get(
            'http://localhost:3001/data/'+sdate
          );
          setapdata(response.data);
          setLoading(false);
          
      }
      
      loadPost();
  },[])
  const columns = useMemo(() => COLUMNS2, [])
  const data = useMemo(() => apdata)



  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useGlobalFilter
  )

  const { globalFilter } = state

  return (
    <>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        <tfoot>
          {footerGroups.map(footerGroup => (
            <tr {...footerGroup.getFooterGroupProps()}>
              {footerGroup.headers.map(column => (
                <td {...column.getFooterProps()}>{column.render('Footer')}</td>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </>
  )
}