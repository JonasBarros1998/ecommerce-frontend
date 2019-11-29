import React, { Component, Fragment } from 'react'

export default class Input extends Component {

    constructor(props) {
        super(props)
        //console.log(`this.props ->  ${this.props}`)
    }

    render() {
        return (
            <Fragment>
                <label>{this.props.label}</label>
                <input {...this.props} />
            </Fragment>
        );
    }
}