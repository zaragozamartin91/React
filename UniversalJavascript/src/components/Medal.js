import React from 'react';

const typeMap = {
    'G': 'Gold',
    'S': 'Silver',
    'B': 'Bronze'
};

/**
 * It receives some props that represent the data related to a medal: the type (G for gold, S for silver and B for bronze),
 *  the year when it was won, the name of the event and the city where the tournament was hosted and the category where the
 *  athlete who won the medal competed.
 */
export default class Medal extends React.Component {
    render() {
        return (
            <li className="medal">
                <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
                <span className="year">{this.props.year}</span>
                <span className="city"> {this.props.city}</span>
                <span className="event"> ({this.props.event})</span>
                <span className="category"> {this.props.category}</span>
            </li>
        );
    }
};