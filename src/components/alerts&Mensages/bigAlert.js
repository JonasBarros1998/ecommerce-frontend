import React from "react"

const BigAlert = (props) => {
    return (
        <div className={props.class} role="alert">
            <h4 className="alert-heading">{props.title}</h4>
            <hr />
            <p>{props.text}</p>
        </div>
    )
}

export default BigAlert