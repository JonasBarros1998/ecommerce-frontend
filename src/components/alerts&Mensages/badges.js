import React from 'react'

const Badges = props =>{
    return (
        <span className = {props.classname}>{props.message}</span>
    )
}

export default Badges