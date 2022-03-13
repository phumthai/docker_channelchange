import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from "@material-ui/core/Grid";

function day3(){
  console.log('3-days');
  let d = "3-days"
  const storage = require('node-sessionstorage')
  storage.setItem('date', d)
}
function day7(){
  console.log('day 7');
  let d = "7-days"
  const storage = require('node-sessionstorage')
  storage.setItem('date', d)
}
function day30(){
  console.log('day 30');
  let d = "30-days"
  const storage = require('node-sessionstorage')
  storage.setItem('date', d)
}

function App () {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
//   let x = JSON.stringify(selectedDate);
//   x = x.split('T')[0]
//   x = x.substring(1)
//   const storage = require('node-sessionstorage')
//   storage.setItem('date', x)
//   console.log(storage.getItem('date'))
  function onChangeDateHandler(value){
      setStartDate(value[0])
      setEndDate(value[1])
      
  }
  let x="",y="";
      if(startDate!==undefined){
        let d = String(startDate.getDate()).padStart(2, '0');
        d.toString()
        let m = String(startDate.getMonth() + 1).padStart(2, '0');
        let yy = startDate.getFullYear()
        y.toString()
        x = yy+"-"+m+"-"+d
      }
      if(endDate!==undefined&&endDate!==null){
        let d = String(endDate.getDate()).padStart(2, '0');
        let m = String(endDate.getMonth() + 1).padStart(2, '0');
        let yy = endDate.getFullYear()
        y.toString()
        y = yy+"-"+m+"-"+d
      }
      //console.log(x+" "+y)
      let z = x + " to " + y
      let zz = z.split(' to ')[1]
      console.log(zz)
      const storage = require('node-sessionstorage')
      storage.setItem('date', z)
      console.log(storage.getItem('date'))
  return (
    <div className='App'>
      <CssBaseline />
      <Grid container justify="center">
        <Stack spacing={2} direction="row">
          <Button 
            variant="contained"
            type="submit"
            color='secondary'
            onClick={()=>day3()}
          >
            3 Day ago
          </Button>
          <Button
            variant="contained"
            type="submit"
            color='secondary'
            onClick={()=>day7()}
          >
            7 Day ago
          </Button>
          <Button 
            variant="contained"
            type="submit"
            color='secondary'
            onClick={()=>day30()}
          >
            30 Day ago
          </Button>
        </Stack>
      </Grid>
      
      <Container maxWidth="lg">
      <Grid container justify='center'>
        <Box sx={{ bgcolor: '#cfe8fc', height: '5vh' }}>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={onChangeDateHandler}
            showYearDropdown
            scrollableYearDropdown
            dateFormat={'dd-MM-yyyy'}
          />
        </Box>
      </Grid>
      </Container>
      
    </div>
    
  )
}

export default App