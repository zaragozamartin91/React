import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

function onTouchTap() {
  console.log("Button touched!");
}

const MyAwesomeReactComponent = () => (
  <RaisedButton label="Raised button" onTouchTap={onTouchTap} />
);

export default MyAwesomeReactComponent;