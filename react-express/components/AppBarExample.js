import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

/* ESTE FRAGMENTO DE CODIGO ES REQUERIDO PARA LOS EVENTOS DE TIPO TOUCH O CLICK EN COMPONENTES MATERIAL-UI */
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
/* -------------------------------------------------------------------------------------------------------- */


const MyAppBar = React.createClass({
    getInitialState: function() {
        return {
            
        }
    },

    appBarLeftTap: function() {
        
    },

    render: function () {
        return (
            <MuiThemeProvider>
                <AppBar onLeftIconButtonTouchTap={this.appBarLeftTap} />
            </MuiThemeProvider>
        );
    }
});

ReactDom.render(
    <MyAppBar />,
    document.getElementById('root')
);