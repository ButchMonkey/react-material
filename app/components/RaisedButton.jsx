import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  marginRight: 12,
};

/* RaisedButton example from Material UI */
const RaisedButtonExampleSimple = () => (
  <div>
    <RaisedButton label="Test" style={style} />
    <RaisedButton label="Primary" primary={true} style={style} />
    <RaisedButton label="Secondary" secondary={true} style={style} />
    <RaisedButton label="Disabled" disabled={true} style={style} />
    <br />
    <br />
    <RaisedButton label="Full width" fullWidth={true} />
  </div>
);

export default RaisedButtonExampleSimple;