import React from 'react';
import {Container as Grid, Card, CardTitle, CardBody, Col, Row, Form, FormGroup,
Label,Input, Button} from 'reactstrap'

export default class UserCreate extends React.Component{
    render(){
        const textCenter = {textAlign:"center"};
        return(
            <Grid>
                <Row>
                    <Col lg={6} md={8} sm={10} className="offset-lg-3 offset-md-2 offset-sm-1">
                        <Card>
                            <CardBody>
                                <Form>
                                    <legend style={textCenter}>Cadastro de Usuário</legend>
                                    <FormGroup>
                                        <Label for="user">Usuário</Label>
                                        <Input id="username"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Senha</Label>
                                        <Input id="password" type="password"></Input>
                                    </FormGroup>
                                    <br/>
                                    <Button type="submit" color="primary" className="btn-block m-t-md">
                                        Cadastrar
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