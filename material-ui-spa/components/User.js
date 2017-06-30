import React from 'react';

var User = React.createClass({
    render: function () {
        return (
            <div>
                <p>{this.props.user.name}</p>
                <ul>
                    <li>Email: {this.props.user.email}</li>
                    <li>Job: {this.props.user.job}</li>
                </ul>
            </div>
        );
    }
});

export default User;