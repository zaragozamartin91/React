import React from 'react';

var User = React.createClass({
    render: function () {
        let title = <h2>{this.props.user.name}</h2>;
        console.log("title:");
        console.log(title);
        return (
            <div>
                {title}
                <ul>
                    <li>Email: {this.props.user.email}</li>
                    <li>Job: {this.props.user.job}</li>
                </ul>
            </div>
        );
    }
});

export default User;