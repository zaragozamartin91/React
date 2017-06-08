import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';

function resetScrolling() {
    window.scrollTo(0, 0);
}

/** The router receives our routes mapping in the router prop. We also configure the history prop to specify that 
 * we want to use the HTML5 browser history for the routing.
 * 
 * we also added an onUpdate callback to reset the scrolling of the window to the top everytime a link is clicked.  */
export default class AppRoutes extends React.Component {
    render() {
        return (
            <Router history={browserHistory} routes={routes} onUpdate={resetScrolling} />
        );
    }
}
