import React from 'react';
import {Container as Grid, Card, CardTitle, CardBody, Col, Row, Form, FormGroup,
Label,Input, Button} from 'reactstrap'

function NivelPermissoes(){
    const permissoesArray = [
        'Admininstrador',
        'Gerente',
        'Diretor',
    ]
    const permissoesObj = permissoesArray.map(nivel=><option>{nivel}</option>);
    return(
        <Input id="nivel" name="nivel" type="select" multiple>
            {permissoesObj}
        </Input>
    );
}

export default class UserCreate extends React.Component{
    render(){
        const textCenter = {textAlign:"center"};
        return(
            <Grid style={{marginTop:"4.25%", marginBottom:"4.25%"}} >
                <Row>
                    <Col lg={6} md={8} sm={10} className="offset-lg-3 offset-md-2 offset-sm-1">
                        <Card>
                            <CardBody>
                                <Form>
                                    <legend style={textCenter}>Cadastro de Usuário</legend>
                                    <FormGroup>
                                        <Label for="nome">Nome</Label>
                                        <Input id="nome"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="username">Nome de Usuário</Label>
                                        <Input id="username"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Senha</Label>
                                        <Input id="password" type="password"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="nivel">Nível de Permissão</Label>
                                        <NivelPermissoes/>
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