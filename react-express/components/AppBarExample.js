import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

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

    /* Esta funcion se ejecutara cada vez que se solicite cambiar el estado de la barra. */
    onDrawerRequestChange: function (open) {
        this.setState({ drawerOpen: open });
    },

    render: function () {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar onLeftIconButtonTouchTap={this.appBarLeftTap} />
                    <Drawer open={this.state.drawerOpen} docked={false} onRequestChange={this.onDrawerRequestChange} >
                        <MenuItem>Menu Item 1</MenuItem>
                        <MenuItem onTouchTap={ e => location.href="/users" }>Users</MenuItem>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
});

ReactDom.render(
    <MyAppBar />,
    document.getElementById('root')
);