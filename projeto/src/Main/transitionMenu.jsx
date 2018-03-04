import React from 'react';
import {Container as Grid ,Col, Row, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import {Icon} from 'react-font-awesome-5';
import $ from 'jquery';
import 'whatwg-fetch';

const EntityButton = (props) => (
    <Button type="submit" color="primary"
    onClick={props.function} style={props.style}>
    <img src={props.img} height="75px" width="75px"/>
    <Grid style={{height:"25px", width:"75px"}}>
        <Row className="text-center" style={{display:"block",fontSize:"0.7rem"}}>
            {props.text}
        </Row>
    </Grid>
    </Button>
);

export default class TransitionMenu extends React.Component{
    constructor(){
        super();
        this.state = {redirect:false}
        this.routeUser = this.routeUser.bind(this);
        this.routeEmpresa = this.routeEmpresa.bind(this);
    }
    routeUser(e){
        e.preventDefault();
        var route = '/user';
        route += localStorage.getItem('route');
        localStorage.setItem('route',route);
        console.log(this);
        this.setState({redirect:true});
    }

    routeEmpresa(e){
        e.preventDefault();
        var route = '/empresa';
        route += localStorage.getItem('route');
        localStorage.setItem('route',route);
        console.log(route);
        this.setState({redirect:true});
    }
    render(){
        const myMargin = {marginLeft:"15px", marginTop:"10px"};
        const textCenter = {textAlign:"center"};
        if(this.state.redirect)
            return(<Redirect to={localStorage.getItem('route')}/>)
        return(
        <Grid style={{marginTop:"8.5%"}}>
            <Row>
                <Col lg={6} md={8} sm={10} className="offset-lg-3 offset-md-2 offset-sm-1">
                    <Card>
                        <CardBody>
                        <legend style={textCenter}>{localStorage.getItem('title')}</legend>
                        <br/>
                        <hr/>
                        <Col className="offset-1 offset-sm-0">
                        <EntityButton function={this.routeUser} img="./users.png" text="Usuários" style={myMargin}/>
                        <EntityButton function={this.routeUser} img="./employee.png" text="Empregados" style={myMargin}/>
                        <EntityButton function={this.routeEmpresa} img="./empresas.png" text="Empresas" style={myMargin}/>
                        <EntityButton function={this.routeEmpresa} img="./systems.png" text="Sistemas" style={myMargin}/>
                        </Col>
                        <hr style={{marginTop:"26px"}}/>
                        <br/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Grid>
        );
    }
}