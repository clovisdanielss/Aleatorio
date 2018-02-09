import React from 'react'
import ReactDOM from 'react-dom';
import {Grid, Col, Row} from 'react-bootstrap';
import {Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const contentNode = document.getElementById('content');

class Login extends React.Component{
    render(){
        return(
            <Grid>
                <Row>
                    <Col sm={4} xs={8} className="offset-sm-4">
                        <Card>
                            <CardHeader>
                                Login
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup>
                                        <Label for="username">Usuário</Label>
                                        <Input id="username"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Senha</Label>
                                        <Input id="password" type="password"></Input>
                                    </FormGroup>
                                    <Row>
                                        <Col className="offset-sm-5">
                                            <Button color="primary">Entrar</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

ReactDOM.render(<Login/>, contentNode);