import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

// universal routing and rendering
/** The important part of the code here is the Express route defined with app.get('*', (req, res) => {...}). 
 * This is an Express catch-all route that will intercept all the GET requests to every URL in the server. 
 * Inside this route, we take care of delegating the routing logic to the React Router match function */
app.get('*', function (req, res) {

    /** ReactRouter.match accepts two parameters: the first one is a configuration object and the second is a callback
     *  function. The configuration object must have two keys:
        > routes: used to pass the React Router routes configuration. Here, we are passing the exact same configuration that we used for the client-side rendering.
        > location: This is used to specify the currently requested URL.
 */
    console.log(req);
    match(
        { routes, location: req.url },
        function (err, redirectLocation, renderProps) {

            // in case of error display the error message
            if (err) {
                return res.status(500).send(err.message);
            }

            // in case of redirect propagate the redirect to the browser
            if (redirectLocation) {
                return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
            }

            /** we use the ReactDOM.renderToString function to be able to render the HTML code that represents 
             * the component associated to the currently matched route */

            // generate the React markup for the current route
            let markup;
            if (renderProps) {
                // if the current route matched we have renderProps
                markup = renderToString(<RouterContext {...renderProps} />);
            } else {
                // otherwise we can render a 404 page
                markup = renderToString(<NotFoundPage />);
                res.status(404);
            }

            // render the index template with the embedded React markup
            return res.render('index', { markup });
        }
    );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
    if (err) {
        return console.error(err);
    }
    console.info(`Server running on http://localhost:${port} [${env}]`);
});
