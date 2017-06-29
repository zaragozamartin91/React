import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

/* ESTE FRAGMENTO DE CODIGO ES REQUERIDO PARA LOS EVENTOS DE TIPO TOUCH O CLICK EN COMPONENTES MATERIAL-UI */
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();
/* -------------------------------------------------------------------------------------------------------- */


const MyAppBar = React.createClass({
    getInitialState: function () {
        return {
            drawerOpen: false
        }
    },

    appBarLeftTap: function () {
        console.log('AppBar tap!');
        const drawerOpen = this.state.drawerOpen;
        this.setState({ drawerOpen: !drawerOpen });
    },

    render: function () {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar onLeftIconButtonTouchTap={this.appBarLeftTap} />
                    <Drawer open={this.state.drawerOpen} docked={false} />
                </div>
            </MuiThemeProvider>
        );
    }
});

ReactDom.render(
    <MyAppBar />,
    document.getElementById('root')
);