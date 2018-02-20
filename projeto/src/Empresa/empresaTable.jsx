import React from 'react';
import {Table,Container as Grid, Button} from 'reactstrap';
import {Icon} from 'react-font-awesome-5';
import TopMenu from '../topMenu.jsx';
const TableRow = (props) => {
    function OnDeleteClick(){
        props.deleteElement(props.data._id);
    }
    
    return(  <tr className="list-group-item-action">
        <td>{props.data._id}</td>
        <td>{props.data.nome}</td>
        <td>{props.data.email}</td>
        <td>{props.data.cnpj}</td>
        <td>{props.data.address.rua}</td>
        <td>
            <Button color="danger" onClick={OnDeleteClick}>
                <Icon.TrashAlt/>
            </Button>
        </td>
    </tr>
)
}

function TableList(props){
    const rows = props.collection.map(data=>
        <TableRow data={data} key={data._id} deleteElement={props.deleteElement}/>);
    return(
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Cnpj</th>
                    <th>Rua</th>
                    <th>Action</th>
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
        this.loadData = this.loadData.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
        this.state = {collection:[]};
    }

    componentDidMount(){
        this.loadData();
    }

    deleteElement(id){
        fetch(`/api/empresas/${id}`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+localStorage.getItem('token'),
            },
        }).then(response=>{
            return response.json();
        }).then(data=>{
            alert(data.message.toUpperCase());
            this.loadData();
        }).catch(err=>{
            console.log(err);
        });
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
                <TableList deleteElement={this.deleteElement} style={topMargin} collection={this.state.collection}/>
            </div>
        );
    }
}