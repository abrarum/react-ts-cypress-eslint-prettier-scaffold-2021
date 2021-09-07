import React from 'react';
import ReactDOM from 'react-dom';
// import { Router } from 'react-router';
import './style.css';
import Loadable from 'react-loadable';
// router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// offline experience for webpack projects - caches webpack some assets
// load components with dynamic imports
// entry point
import Welcome from './views/welcome';

const App = (): JSX.Element => (
    <Router>
        <Switch>
            <Route path="/">
                <Welcome />
            </Route>
        </Switch>
    </Router>
);

// Strict mode checks are run in development mode only;
// they do not impact the production build.

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

const devState = {};
const renderMethod = devState ? ReactDOM.hydrate : ReactDOM.render;

const render = (): void =>
    renderMethod(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.querySelector('#root')
    );
// We can use the Loadable.preloadReady() method on the client to preload
// the loadable components that were included on the page.
Loadable.preloadReady()
    .then(render)
    .catch((err: string) => {
        console.error(err);
    });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
