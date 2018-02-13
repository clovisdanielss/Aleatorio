import React from 'react';
import ReactDOM from 'react-dom';
import Page from './page.jsx';
import Anim from './velocimeterAnimation.jsx';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import Login from './login.jsx';

const RouterApp = () =>(
    <Router>
        <div>
            <Link to="/main">page</Link>
            <Route exact path = '/' component={Login}/>
            <Route  path = '/main' component={Page}/>
        </div>
    </Router>
);

const contentNode = document.getElementById('content');

ReactDOM.render(<RouterApp/>, contentNode);

