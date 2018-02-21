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

export default class UserEdit extends React.Component{
    constructor(){
        super();
        this.state = {
            id:localStorage.getItem('editId'),
        }
        this.loadData = this.loadData.bind(this);
        this.submit = this.submit.bind(this);
    }

    componentDidMount(){
        this.loadData();
    }

    submit(e){
        e.preventDefault();
        fetch(`/api/users/${this.state.id}`,{
            method:'put',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + localStorage.getItem('token'),
            },
            body: JSON.stringify({
                'nome':$('#nome').val(),
                'username':$('#username').val(),
                'nivel':$('#nivel').val(),
                'password':$('#password').val(),
            }),
        }).then(response=>{
            return response.json();
        }).then(data=>{
            alert(data.message.toUpperCase());
        }).catch(err=>{
            console.log(err);
        })
    }

    loadData(){
        fetch(`/api/users/${this.state.id}`,{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + localStorage.getItem('token'),
            },
        }).then(response=>{
            return response.json();
        }).then(data=>{
            $('#nome').val(data.nome);
            $('#username').val(data.username);
            $('#nivel').val(data.nivel);
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
                                    <legend style={textCenter}>Edição de Usuário</legend>
                                    <FormGroup>
                                        <Label for="nome">Nome</Label>
                                        <Input id="nome"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="username">Nome de Usuário</Label>
                                        <Input id="username" disabled></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Nova Senha</Label>
                                        <Input id="password" type="password"></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="nivel">Nível de Permissão</Label>
                                        <NivelPermissoes/>
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