import React, { Component } from 'react';
import Form from './components/Form';
import Template from './components/Template';
import EquipNum from './components/EquipNum';
import Equipments from './datas/Equipments';
import Datas from './datas/Datas';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        equip: '01',
        phone: '2019-11-03-01.dat'
      }
    ]
  }
  render() {
    const { } = this.state;
    return (
      <div>
        <Template form={(<Form/>)}>
        <EquipNum data={this.state.information}/>
        </Template>
      </div>
    );
  }
}

export default App;