import React from 'react';
import {Table,Container as Grid} from 'reactstrap';
import TopMenu from '../topMenu.jsx';

const TableRow = (props) => (
    <tr>
        <td>{props.data._id}</td>
        <td>{props.data.nome}</td>
        <td>{props.data.cpf}</td>
        <td>{props.data.username}</td>
        <td>{props.data.nivel}</td>
        <td>{props.data.empresa.nome}</td>
    </tr>
)

function TableList(props){
    const rows = props.collection.map(data=><TableRow data={data} key={data._id}/>);
    return(
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Username</th>
                    <th>Nível</th>
                    <th>Empresa</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}


export default class UserTable extends React.Component{
    constructor(){
        super();
        this.loadData.bind(this);
        this.state = {collection:[]};
        this.loadData();
    }

    loadData(){
        //e.preventDefault();
        fetch('/api/users', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token'),
            },
        }).then(response => {
            return response.json();
        }).then(data => {
            this.setState({collection:data});
        }).catch(err => {
            console.log(err);
        })
    }

    render(){
        const topMargin = {marginTop:"50px"};
        return(
            <div>
                <TableList style={topMargin} collection={this.state.collection}/>
            </div>
        );
    }
}