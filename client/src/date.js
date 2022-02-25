import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function App () {
  const [selectedDate, setSelectedDate] = useState(new Date())
  let x = JSON.stringify(selectedDate);
  x = x.split('T')[0]
  x = x.substring(1)
  const storage = require('node-sessionstorage')
  storage.setItem('date', x)
  //console.log(storage.getItem('date'))
  return (
    <div className='App'>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        placeholderText={'dd/mm/yyyy'}
        showYearDropdown
        scrollableYearDropdown
        dateFormat={'dd-MM-yyyy'}
      />
    </div>
    
  )
}

export default App