import React, { Component } from 'react';

const Date = (props) => {
    return (
        <React.Fragment>
                <input
                style={{width:100}}
                placeholder="start date"
                value={props.start_date}
                onChange={props.handleChange}
                name="start_date"
                />
                <span> ~ </span> 
                <input
                style={{width:100}}
                placeholder="end date"
                value={props.end_date}
                onChange={props.handleChange}
                name="end_date"
                />
        </React.Fragment>
    );
}

export default Date; 