import React from 'react'
import Container from './container.jsx';
import Navbar from './navbar.jsx';

export default class Page extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <Container/>
            </div>
        );
    }
}