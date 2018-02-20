import React from 'react';
import {Container as Grid ,Col, Row, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import $ from 'jquery';
import 'whatwg-fetch';

export default class TransitionMenu extends React.Component{
    constructor(){
        super();
        this.state = {redirect:false}
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
                        <Button type="submit" color="primary" className="btn-block m-t-md" 
                        onClick={this.routeUser.bind(this)}>
                        Usuários
                        </Button>
                        <hr/>
                        <Button type="submit" color="primary" className="btn-block m-t-md" 
                        onClick={this.routeEmpresa.bind(this)}>
                        Empresas
                        </Button>
                        <hr/>
                        <br/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Grid>
        );
    }
}