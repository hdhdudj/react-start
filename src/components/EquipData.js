import React, { Component } from 'react';
import Checkbox from '../materialuis/CheckBox';

class EquipData extends Component {
  static defaultProps = {
    info: {
      name: '2019-11-03-01.dat',
      id: 0
    }
  }
  
  render() {
    const {
      name, id
    } = this.props.info;
    
    return (
      <div>
      <div style={{paddingLeft:40}}>
        <Checkbox/><span>2019-11-03-01.dat</span>
      </div>
            <div style={{paddingLeft:40}}>
            <Checkbox/><span>2019-11-03-02.dat</span>
          </div>
                <div style={{paddingLeft:40}}>
                <Checkbox/><span>2019-11-03-03.dat</span>
              </div>
      </div>
    );
  }
}

export default EquipData;