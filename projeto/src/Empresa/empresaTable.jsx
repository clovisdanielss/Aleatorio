import React from 'react';
import {Table,Container as Grid} from 'reactstrap';
import TopMenu from '../topMenu.jsx';
const TableRow = (props) => (
    <tr>
        <td>{props.data._id}</td>
        <td>{props.data.nome}</td>
        <td>{props.data.email}</td>
        <td>{props.data.cnpj}</td>
        <td>{props.data.address.rua}</td>
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
                    <th>Email</th>
                    <th>Cnpj</th>
                    <th>Rua</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </Table>
    );
}


export default class EmpresaTable extends React.Component{
    constructor(){
        super();
        this.loadData.bind(this);
        this.state = {collection:[]};
        this.loadData();
    }

    loadData(){
        //e.preventDefault();
        fetch('/api/empresas', {
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