import React from 'react'
import Container from './container.jsx';
import TopMenu from './topMenu.jsx';

export default class Page extends React.Component{
    render(){
        return(
            <div>
                <TopMenu/>
                <Container/>
            </div>
        );
    }
}