import React from 'react';
import {Icon} from 'react-font-awesome-5';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {Link} from 'react-router-dom';

const NavbarItens = (props) => (
    <Collapse isOpen={props.isOpen} navbar>
        <Nav className="navbar-nav" navbar>
            <NavItem>
                <Link className="nav-link" to='/userCreate'>
                    <Icon.UserPlus/> Cadastrar
                </Link>
            </NavItem>
            <NavItem>
                <NavLink>
                    <Icon.Edit/> Editar
                </NavLink>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to='/userTable'>
                    <Icon.CheckSquare/> Permissões
                </Link>
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
const NavbarIcon = (
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
        this.setState({isOpen:!this.state.isOpen});
    }
    render(){
        return(
            <Navbar className="navbar-expand-lg navbar-light bg-light" expand="md">
                {NavbarIcon}
                <NavbarItens isOpen={this.state.isOpen}/>
                <NavbarToggler onClick={this.open} className="mr-2"/>
            </Navbar>
        );
    }
}