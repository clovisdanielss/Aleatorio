import React from 'react';
import {Icon} from 'react-font-awesome-5';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const navbarItens = (
    <Collapse isOpen="" navbar>
        <Nav className="navbar-nav" navbar>
            <NavItem>
                <NavLink>
                    <Icon.UserPlus/> Cadastrar
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Icon.Edit/> Editar
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Icon.CheckSquare/> Permissões
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Icon.ChartBar/> Relatórios
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Icon.Envelope/> Contato
                </NavLink>
            </NavItem>
        </Nav>
        <Nav className="navbar-nav ml-auto" navbar>
            <NavItem>
                    <NavLink>
                        <Icon.SignOutAlt/> Sair
                    </NavLink>
            </NavItem>
        </Nav>
    </Collapse>
);
const smallerImage = {maxWidth:"60%", marginTop:"7px"}
const navbarIcon = (
    <NavbarBrand>
            <img className="img-fluid logo" style={smallerImage} src="http://www.graphvs.com.br/sitegraphvs/wp-content/themes/graphvs/images/logo_graphvs.png" alt="">
            </img>
    </NavbarBrand>
);

export default class TopMenu extends React.Component{
    constructor(){
        super();
        this.state = {
            isOpen: false,
        }
        this.open = this.open.bind(this);
    }
    open(){

    }
    render(){
        return(
            <Navbar className="navbar-expand-lg navbar-light bg-light" expand="md">
                {navbarIcon}
                {navbarItens}
                <NavbarToggler className="mr-2"/>
            </Navbar>
        );
    }
}