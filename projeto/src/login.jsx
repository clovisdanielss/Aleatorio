import React from 'react'
import ReactDOM from 'react-dom';
import {Grid, Col, Row} from 'react-bootstrap';
import {Card, CardHeader, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

//As classes devem ser do bootstrap 4. (Não possui tags para Grid,Col,Row)
//As tags(Grid,Col,Row) são do bootstrap 3.

const contentNode = document.getElementById('content');

class Login extends React.Component{
    render(){
        return(
            <Grid style={{marginTop:"12.5%"}}>
                <Row>
                    <Col lg={4} md={6} sm={8} className="offset-sm-2 offset-md-3 offset-lg-4">
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
                                        <Col sm={4} className="offset-sm-4 offset-4">
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