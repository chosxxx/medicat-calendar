import React from 'react';

function Month(props) {
    var date = new Date(props.year, props.month, 1);
    return (
        <div className="Month-header-element">
            <p>{date.toLocaleDateString("default", {month: "long"})} {props.year}</p>
        </div>
    );
}

export default Month;