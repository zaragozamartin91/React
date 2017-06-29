import users from '../data/users';
import React from 'react';
import ReactDom from 'react-dom';

import User from './User';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

var UserPage = React.createClass({
    render: function () {
        return (
            <div id="users">
                {users.map(usr => <User user={usr}></User>)}
                <MuiThemeProvider>
                    <MyAwesomeReactComponent />
                </MuiThemeProvider>
            </div>
        );
    }
});

<<<<<<< HEAD
// null.map(); INTENCIONAL PARA DISPARAR ERROR

export default UserPage;
=======
ReactDom.render(
    <UserPage />,
    document.getElementById('root')
);
>>>>>>> 677054c3c0a6e81c3c697ec210bf4a20821b9065
