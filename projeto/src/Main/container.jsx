import React from 'react';
import Animation from './velocimeterAnimation.jsx';
import {Grid, Col, Row} from 'react-bootstrap';
import {Card, CardGroup,CardHeader, CardBody, Form, FormGroup, Label, Input, Button} from 'reactstrap';

const noPadding = {padding: "0"};
const topMargin = {marginTop:"50px"};

export default class Container extends React.Component{
    componentDidMount(){
        Animation();

    }
    
    render(){
        return(
            <Col lg={6} className=" offset-lg-3 " style={topMargin}>
                    <Card className="text-center">
                        <CardHeader>
                            Resumo
                        </CardHeader>
                        <CardGroup>
                            <Velocimeter title = "Empresas" index = "" lowerCaseTitle = "empresas" value="1000"/>
                            <Velocimeter title = "Usuarios" index = "2" lowerCaseTitle = "usuarios" value="3000"/>
                            <Velocimeter title = "Sistemas" index = "3" lowerCaseTitle = "sistemas" value="5000"/>
                        </CardGroup>
                    </Card>
            </Col>
        );
    }
}
const noHeight = {height:"0"};
const Velocimeter = (props) => (
    <Card>
        <CardBody>
            <h5 className="card-title">
                {props.title}
            </h5>
            <div id={"wrapper"}>
                <svg id="meter">
                    <circle id={"outline_curves" + props.index} className="circle outline" cx="50%" cy="50%"></circle>
                    <circle id={"low" + props.index} className="circle range" cx="50%" cy="50%" stroke="#54d858"></circle>
                    <circle id={"avg" + props.index} className="circle range" cx="50%" cy="50%" stroke="#FDE47F"></circle>
                    <circle id={"high" + props.index} className="circle range" cx="50%" cy="50%" stroke="#E04644"></circle>
                    <circle id={"mask" + props.index} className="circle" cx="50%" cy="50%"></circle>
                    <circle id={"outline_ends" + props.index} className="circle outline" cx="50%" cy="50%"></circle>
                </svg>
                <img id={"meter_needle" + props.index} src="https://hongkiat.github.io/svg-meter-gauge/svg-meter-gauge-needle.svg" alt=""></img>
                <h5 value="0" id={"count-" + props.lowerCaseTitle} className="count">{props.value}</h5>
            </div>
        </CardBody>
    </Card>
);