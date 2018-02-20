import React from 'react';
import {Container as Grid, Card, CardTitle, CardBody, Col, Row, Form, FormGroup,
Label,Input, Button} from 'reactstrap'
import 'whatwg-fetch';
import $ from 'jquery';

function NivelPermissoes(){
    const permissoesArray = [
        'adm',
        'ger',
        'dir',
    ]
    const permissoesObj = permissoesArray.map(nivel=><option key={nivel}>{nivel}</option>);
    return(
        <Input className="custom-select" id="nivel" name="nivel" type="select">
            {permissoesObj}
        </Input>
    );
}

function ListarEmpresas(props){
    const empresas = props.empresas.map(empresa=>(<option id={empresa._id} key={empresa._id}>{empresa.nome}</option>))
    return(
        <Input className="custom-select" id="empresa" name="empresa" type="select">
            {empresas}
        </Input>
    );
}

export default class UserCreate extends React.Component{
    constructor(){
        super();
        this.state = {
            empresas:[],
        }
        this.submit.bind(this);
        this.loadEmpresas();
    }

    loadEmpresas(){
        fetch('/api/empresas', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token'),
            },
        }).then(response => {
            return response.json();
        }).then(data => {
            this.setState({empresas:data});
        }).catch(err => {
            console.log(err);
        })
    }

    submit(e){
        e.preventDefault();
        fetch('/api/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                'nome':$('#nome').val(),
                'username':$('#username').val(),
                'nivel':$('#nivel').val(),
                'password':$('#password').val(),
                'empresa':$('#empresa').children(':selected').attr('id'),
            }),
        }).then(response=>{
            return response.json();
        }).then(data=>{
            alert(data.message.toUpperCase());
        }).catch(err=>{
            console.log(err);
        })
    }

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
                                    <FormGroup>
                                        <Label for="empresas">Empresa</Label>
                                        <ListarEmpresas empresas={this.state.empresas}/>
                                    </FormGroup>
                                    <br/>
                                    <Button type="submit" color="primary" className="btn-block m-t-md" onClick={this.submit}>
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