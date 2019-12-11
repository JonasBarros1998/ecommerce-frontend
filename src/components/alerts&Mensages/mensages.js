/**
 * Alert usado caso deu algum erro como de login invalido,
 * erro na aplicação.
 */
import React from 'react'
const MensageDanger = props => {
    return (
        <div className="alert alert-danger alert-dismissible fade show mb-5" role="alert">
          {props.mensage}
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export{ MensageDanger }