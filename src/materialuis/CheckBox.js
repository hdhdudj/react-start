import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <React.Fragment>
      <Checkbox
        
        color="default"
        value="checkedG"
        inputProps={{
          'aria-label': 'checkbox with default color',
        }}
      />
    </React.Fragment>
  );
}