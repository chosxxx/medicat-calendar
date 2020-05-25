import React, { useState } from 'react';
import weekDays from '../WeekDays/WeekDays';

const monthDays = (props) =>
{
    var date = new Date(props.year, props.month, 1);
    var weekDay = date.getDay();

    let rows = [];
    let singleRow = [];
    for (var i = 1; i <= weekDay; i++){
        singleRow.push(<td></td>);
    }

    var nextMonth = props.month + 1;
    var nextYear = props.year;
    if (nextMonth == 12)
    {
        nextYear++;
        nextMonth = 0;
    }
    var daysInMonth = new Date(nextYear, nextMonth, 0).getDate();
    for (var i = date.getDate(); i <= daysInMonth; date.setDate(date.getDate() + 1)){
        singleRow.push(<td>{date.getDate()}</td>);
        weekDay = date.getDay();
        if (weekDay == 6){
            rows.push(<tr>{singleRow}</tr>);
            singleRow = [];
        }
        i++;
    }
    rows.push(<tr>{singleRow}</tr>);

    return (
        <table className="Month-grid">
            {rows}
        </table>
    );
}

export default monthDays;