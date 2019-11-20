import React, { Component } from 'react';

const FileSize = (props) => {
    return (
        <React.Fragment>
                <input
                style={{width:100}}
                value={props.filesize}
                onChange={props.handleChange}
                name="filesize"
                /> MB
        </React.Fragment>
    );
}

export default FileSize; 