/**
 * Alert usado caso deu algum erro como de login invalido,
 * erro na aplicação.
 */
import React from 'react'
const MensageDanger = props => {
    return (
        <div className={props.classname} role="alert">
            {props.message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export { MensageDanger }