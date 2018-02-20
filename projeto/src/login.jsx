import React from 'react'
import {Container as Grid ,Col, Row, Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {Redirect} from 'react-router-dom';
import $ from 'jquery';
import 'whatwg-fetch';

//As classes devem ser do bootstrap 4. (Não possui tags para Grid,Col,Row)
//As tags(Grid,Col,Row) são do bootstrap 3.

const textCenter = {textAlign:"center"};

export default class Login extends React.Component{
    constructor(){
        super();
        this.state={isAuth:false}
        this.login = this.login.bind(this);
    }
    login(e){
        e.preventDefault();
        const $this = this;
        fetch('/login',
        {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                user:$('#user').val(),
                pass:$('#pass').val()
            }),

        }).then(response=>{
            return response.json();
        }).then(data=>{
            if(data.message === 'ok'){
                $this.setState({isAuth:true});
                //localStorage soh usa o contexto da aba atual.
                localStorage.setItem('token',data.token);
            }
        }).catch(err=>{
            console.log('Erro inesperado');
        });
    }
    render(){
        const {isAuth} = this.state;
        if(isAuth){
            return <Redirect to='/main'/>
        }
        return(
            <Grid style={{marginTop:"8.5%"}}>
                <Row>
                    <Col lg={6} md={8} sm={10} className="offset-lg-3 offset-md-2 offset-sm-1">
                        <Card>
                            <CardBody>
                                <Form>
                                    <legend style={textCenter}>Sistema de Controle</legend>
                                    <FormGroup>
                                        <Label for="user">Usuário</Label>
                                        <Input id="user"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="pass">Senha</Label>
                                        <Input id="pass" type="password"></Input>
                                    </FormGroup>
                                    <br/>
                                    <Button type="submit" onClick={this.login} color="primary" className="btn-block m-t-md">
                                        Entrar
                                    </Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Grid>
        );
    }
}
