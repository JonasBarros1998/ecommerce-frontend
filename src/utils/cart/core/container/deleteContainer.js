import React from 'react'
import { deleteProduct } from '../controllers/deleteProduct'

const DeleteContainer = (props) => {
    return (
        <>
            <small>
                <a
                    className = "link" href={"/carrinho"}
                    onClick={() => deleteProduct({id: props.deleteItem._id})}>
                    Excluir</a>
            </small>
        </>
    )
}

export default DeleteContainer