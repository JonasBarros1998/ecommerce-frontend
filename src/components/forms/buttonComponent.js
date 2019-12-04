import React, { Component } from 'react'

export default class Buttons extends Component{
    
    constructor(props){
        super(props)
        this.props = props
    }

    render(){
        return(
        <button {...this.props}>{this.props.text}</button>
        );
    }
}