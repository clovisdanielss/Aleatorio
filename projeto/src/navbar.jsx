import React from 'react';
import {Icon} from 'react-font-awesome-5';

const navbarItens = (
    <div id="navbar-toggle" className="navbar-collapse collapse">
        <ul className="navbar-nav mr-auto">
            <li>
                <a className="nav-link" href="#">
                    <Icon.UserPlus/> Cadastrar</a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    <Icon.Edit/> Editar</a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    <Icon.CheckSquare/> Permissões</a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    <Icon.ChartBar/> Relatórios</a>
            </li>
            <li>
                <a className="nav-link" href="#">
                    <Icon.Envelope/> Contato</a>
            </li>
        </ul>
        <ul className="navbar-nav navbar-right">
            <li>
                <a className="nav-link">
                    <Icon.SignOutAlt/> Sair</a>
            </li>
        </ul>
    </div>
);
const smallerImage = {maxWidth:"60%", marginTop:"7px"}
const navbarIcon = (
    <a className="navbar-brand" >
            <img className="img-fluid logo" style={smallerImage} src="http://www.graphvs.com.br/sitegraphvs/wp-content/themes/graphvs/images/logo_graphvs.png" alt="">
            </img>
    </a>
);

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {navbarIcon}
                {navbarItens}
            </nav>
        );
    }
}