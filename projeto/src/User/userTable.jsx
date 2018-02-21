import React from 'react';
import {Table,Container as Grid, Button, Col,Row} from 'reactstrap';
import {Icon} from 'react-font-awesome-5';
import TopMenu from '../topMenu.jsx';
import {Link,Redirect} from 'react-router-dom';

const TableRow = (props) => {
    function OnDeleteClick(){
        props.deleteElement(props.data._id);
    }

    function OnEditClick(){
        localStorage.setItem('editId',props.data._id);
    }
    
    return(  <tr className="list-group-item-action">
        <td>{props.data._id}</td>
        <td>{props.data.nome}</td>
        <td>{props.data.username}</td>
        <td>{props.data.nivel}</td>
        <td>{props.data.empresa.nome}</td>
        <td>
            <Button color="danger" onClick={OnDeleteClick} style={{marginRight:'10px',width:'40px'}}>
                <Icon.TrashAlt />
            </Button>
            <Link to={'/userEdit'} onClick={OnEditClick}>
                <Button color="info" style={{width:'40px'}}>
                    <Icon.Edit />
                </Button>
            </Link>
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
                    <th>Identificador</th>
                    <th>Nome</th>
                    <th>Username</th>
                    <th>Nível</th>
                    <th>Empresa</th>
                    <th>Action</th>
                    
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
        this.loadData = this.loadData.bind(this);
        this.deleteElement = this.deleteElement.bind(this);
        this.state = {collection:[]};
    }

    componentDidMount(){
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

    deleteElement(id){
        fetch(`/api/users/${id}`,{
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

    render(){
        const topMargin = {marginTop:"50px"};
        return(
            <div>
                <TableList deleteElement={this.deleteElement} style={topMargin} collection={this.state.collection}/>
            </div>
        );
    }
}