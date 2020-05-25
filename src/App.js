import React, { useState } from 'react';
import './App.css';
import Month from './Month/Month'
import WeekDays from './WeekDays/WeekDays';
import MonthDays from "./MonthDays/MonthDays"

function App() {
  var date = new Date();

  var [currentMonth, setCurrentMonth] = useState(date.getMonth());
  var [currentYear, setCurrentYear] = useState(date.getFullYear());

  const navigate = (direction) =>
  {
    const newMonth = currentMonth + direction;

    if (newMonth < 0)
    {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    }
    else if (newMonth > 11)
    {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    }
    else
      setCurrentMonth(newMonth);
  }

  const navigateBack = () => navigate(-1);
  const navigateForward = () => navigate(1);

  return (
    <div className="App">
      <div className="Month-header">
        <Month month={currentMonth} year={currentYear} />
        <button onClick={navigateBack}>&lt;</button>
        <button onClick={navigateForward}>&gt;</button>
      </div>
      <div>
        <WeekDays />
        <MonthDays month={currentMonth} year={currentYear} />
      </div>
    </div>
  );
}

export default App;
