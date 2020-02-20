import React from 'react'

const DeleteContainer = (props) => {
    return (
        <>
            <small>
                <a
                    className = "link" href={"http://localhost"}
                    onClick={() => props.deleteItem(props.productId)}>
                    Excluir</a>
            </small>
        </>
    )
}

export default DeleteContainer