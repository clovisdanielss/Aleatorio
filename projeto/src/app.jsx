import React from 'react';
import ReactDOM from 'react-dom';
import Page from './Main/page.jsx';
import TablePage from './User/userTable.jsx';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';
import Login from './login.jsx';
//
const RouterApp = () =>(
    <Router>
        <div>
            <Route exact path = '/' component={Login}/>
            <Route exact path = '/:foo+' component={Page}/>
        </div>
    </Router>
);

const contentNode = document.getElementById('content');

ReactDOM.render(<RouterApp/>, contentNode);

