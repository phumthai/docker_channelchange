import React, { useMemo, useState, useEffect } from 'react'
import { useTable, useSortBy } from 'react-table'
import axios from "axios";
// import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'



export const SortingTable = () => {

  const [loading,setLoading] = useState(false);
  const [apcount, setapcount] = useState([])
  const storage = require('node-sessionstorage')
  var sdate = storage.getItem('date')

    
  useEffect(()=>{
      const loadPost = async () => {
          setLoading(true);
          const response = await axios.get(
            'http://localhost:3001/ba/'+sdate
          );
          setapcount(response.data);
          setLoading(false);
      }
      loadPost();
  },[])
  console.log(storage)
//   useEffect(()=>{
//     axios.get('http://localhost:3001/ba/'+sdate).then((res)=>{
//           setapcount(res.data)
//       })
//   },[])
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => apcount, [])


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  )

  return (
    <>
    {loading ? (
        <h4>Loading ...</h4>
    ):(
        <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
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
    )}
      
    </>
  )
}