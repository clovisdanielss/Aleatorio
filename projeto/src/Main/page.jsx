import React from 'react'
import Container from './container.jsx';
import TopMenu from '../topMenu.jsx';
import UserTable from '../User/userTable.jsx';
import UserCreate from '../User/userCreate.jsx';
import EmpresaTable from '../Empresa/empresaTable.jsx';
import EmpresaCreate from '../Empresa/empresaCreate.jsx';
import TransitionMenu from './transitionMenu.jsx';
import {BrowserRouter as Router,Switch, Route, Link} from 'react-router-dom';

export default class Page extends React.Component{
    render(){
        return(
            <div>
                <TopMenu/>
                <Route exact path="/main" component={Container}/>
                <Route exact path="/userTable" component={UserTable}/>
                <Route exact path="/userCreate" component={UserCreate}/>
                <Route exact path="/empresaCreate" component={EmpresaCreate}/>
                <Route exact path="/empresaTable" component={EmpresaTable}/>
                <Route exact path="/transitionMenu" component={TransitionMenu}/>
            </div>
        );
    }
}