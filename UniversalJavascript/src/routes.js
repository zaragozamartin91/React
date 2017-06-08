import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/Layout';
import IndexPage from './components/IndexPage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';

/** we are basically using the React Router Route component to map a set of routes to the page components we defined before. */

/** The root route maps the path / to the Layout component.
 * 
 * The first child route is an IndexRoute which is a special route used to define the component that will be rendered when 
 * we are viewing the index page of the parent route (/ in this case). We use our IndexPage component as index route.
 * 
 * The path athlete/:id is mapped to the AthletePage. Note here that we are using a named parameter :id. So this route 
 * will match all the paths with the prefix /athlete/, the remaining part will be associated to the params id and will
 *  be available inside the component in this.props.params.id.
 * 
 * the match-all route * maps every other path to the NotFoundPage component. This route must be defined as the last one.
 */
const routes = (
    <Route path="/" component={Layout}>
        <IndexRoute component={IndexPage} />
        <Route path="athlete/:id" component={AthletePage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);

export default routes;
