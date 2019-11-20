import React, { Component } from 'react';
import EquipData from './EquipData';

class EquipNum extends Component {
    static defalutProps = {
        data : []
    }

    render(){
        const { data } = this.props;
        const list = data.map(
            info => (<EquipData key={info.id} info={info}/>)
        );
        return (            
            <div>
                <div style={{padding:20}}>
                Equipment01
              </div>
                <div>
                    { list }
                </div>
            </div>

        );
    }
}

export default EquipNum;