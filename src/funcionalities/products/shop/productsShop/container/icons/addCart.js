/**
 * Container tem como responsabilidade de renderizar o icone de adicionar
 * produtos ao carrinho e chamar a função para que possibilite que o produto
 * seja adicionado ao carrinho
 */
import React from 'react'
import { addCart } from '../../helpers/addCart'

const AddCartContainer = (props) => {
    
    return (
        <div className="social-info" 
        onClick = {() => addCart(props.itens)}>
            <span className="ti-bag"></span>
            <p className="hover-text">Carrinho</p>
        </div>
    )
}

export default AddCartContainer