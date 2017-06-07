import users from '../data/users';
import React from 'react';
import User from './User';

var UserPage = React.createClass({
    render: function() {
        return (
            <div id="users">
                {users.map( usr => <User user={usr}></User> )}
            </div>
        );
    }
});

export default UserPage;