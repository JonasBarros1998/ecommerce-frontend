import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deleteProduct } from '../controllers/deleteProduct'

const DeleteContainer = (props) => {
    return (
        <>
            <small>
                <a
                    className = "link" href={"#"}
                    onClick={() => deleteProduct({id: props.deleteItem._id})}>
                    Excluir</a>
            </small>
        </>
    )
}

//const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)
export default DeleteContainer