import users from '../data/users';
import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';

console.log("users:");
console.log(users);

var UserPage = React.createClass({
    render: function() {
        return (
            <div id="users">
                {users.map( usr => <User user={usr}></User> )}
            </div>
        );
    }
});

ReactDOM.render(
    <UserPage />,
    document.getElementById('root')
);