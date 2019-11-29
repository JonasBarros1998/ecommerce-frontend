import React, { Component, Fragment } from 'react'

export default class Buttons extends Component{
    
    constructor(props){
        super(props)
        
    }
    render(){
        return(
        <button {...this.props}>{this.props.text}</button>
        );
    }
}