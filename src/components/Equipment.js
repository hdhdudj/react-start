import React, { Component } from 'react';
import CheckBox from '../materialuis/CheckBox';
import Equipments from '../datas/Equipments';

const style = {
    color : 'gray'
}

const Equipment = (props) => {
    return (
        <React.Fragment>
            <CheckBox/> <span style={style}>Equipment01</span>
            <CheckBox/> <span style={style}>Equipment02</span>
            <CheckBox/> <span style={style}>Equipment03</span>
            <CheckBox/> <span style={style}>Equipment04</span>
        </React.Fragment>
    );
}

export default Equipment; 