import React from 'react';
import {Container as Grid, Col, Row, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import 'whatwg-fetch';
import {Icon} from 'react-font-awesome-5';

export default class UserFilter extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
        <Row style={{paddingTop:"12px", paddingLeft:"12px"}}>
            <Col lg={6}>
                <Form inline>
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input style={{marginLeft:"10px"}} id="nome" type="text" />
                    </FormGroup>
                    <Button style={{marginLeft:"10px"}}>Pesquisar</Button>
                </Form>
            </Col>
        </Row>
        );
    }
    
}