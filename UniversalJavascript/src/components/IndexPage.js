import React from 'react';
import AthletePreview from './AthletePreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
    render() {
        /** Para cada atleta en la variable importada athletes, sea crea un AthletePreview.
         * If you already have props as an object, and you want to pass it in JSX, you can use ... as a 
         * "spread" operator to pass the whole props object
         */
        return (
            <div className="home">
                <div className="athletes-selector">
                    {athletes.map(athleteData => <AthletePreview key={athleteData.id} {...athleteData} />)}
                </div>
            </div>
        );
    }
};