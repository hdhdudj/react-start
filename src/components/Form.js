import React, { Component } from 'react';
import Equipment from './Equipment';
import Date from './Date';
import FileSize from './FileSize';

class Form extends Component {
    state = {
        start_date: '',
        end_date: '',
        filesize: ''
    }
    handleChange = ( e ) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return (
            <form>
                <div>
                <span>Equipment </span>
                <Equipment/>
                </div>
                <div>
                <span>Date </span>  
                <Date/>
                </div>
                <div>
                <span>FileSize </span>
                <FileSize/>
                </div>
            </form>
        );
    }
}

export default Form; 