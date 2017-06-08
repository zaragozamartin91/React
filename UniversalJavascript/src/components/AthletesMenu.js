import React from 'react';
import { Link } from 'react-router';

/**
 * menu that is displayed on top of every athlete page to allow the user to easily switch to another athlete without going back to the index.
 */
export default class AthletesMenu extends React.Component {
    render() {
        /* Para cada atleta en las propiedades (atributos) de AthletesMenu crea un elemento de tipo Link. 
        Link is a special component provided by React Router to create links between views*/
        return (
            <nav className="athletes-menu">
                {this.props.athletes.map(menuAthlete => {
                    return <Link key={menuAthlete.id} to={`/athlete/${menuAthlete.id}`} activeClassName="active">{menuAthlete.name}</Link>;
                })}
            </nav>
        );
    }
};