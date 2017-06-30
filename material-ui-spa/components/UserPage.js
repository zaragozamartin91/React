import users from '../data/users';
import React from 'react';
import ReactDom from 'react-dom';

import User from './User';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const UserPage = React.createClass({
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

export default UserPage;