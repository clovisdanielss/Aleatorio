import React from 'react'
import Container from './container.jsx';
import TopMenu from '../topMenu.jsx';
import TablePage from '../User/userTable.jsx';
import UserCreate from '../User/userCreate.jsx';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

export default class Page extends React.Component{
    render(){
        return(
            <div>
                <TopMenu/>
                <Route exact path="/main" component={Container}/>
                <Route exact path="/userTable" component={TablePage}/>
                <Route exact path="/userCreate" component={UserCreate}/>
            </div>
        );
    }
}