import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

function onTouchTap() {
  console.log("Button touched!");
}

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Raised button" onTouchTap={onTouchTap} />
);

export default MyAwesomeReactComponent;