import React from 'react';
import Animation from './velocimeterAnimation.jsx';

const noPadding = {padding: "0"};

export default class Container extends React.Component{
    componentDidMount(){
        Animation();
    }
    render(){
        return(
            <div className = "container-fluid">
                <div className="card text-center col-sm-8 offset-sm-2" style={noPadding}>
                    <div className="card-header">
                        Resumo
                    </div>
                    <div className="card-group">
                        <Velocimeter title = "Empresas" index = "" lowerCaseTitle = "empresas" value="1000"/>
                        <Velocimeter title = "Usuarios" index = "2" lowerCaseTitle = "usuarios" value="3000"/>
                        <Velocimeter title = "Sistemas" index = "3" lowerCaseTitle = "sistemas" value="5000"/>
                    </div>
                </div>
            </div>
        );
    }
}
const noHeight = {height:"0"};

const Velocimeter = (props) => (
    <div className = "card">
        <div className = "card-body">
            <h5 className = "card-title">
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
        </div>
    </div>
);