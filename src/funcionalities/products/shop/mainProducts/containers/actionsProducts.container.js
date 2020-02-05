import React from 'react'
import {addProduct} from '../../../../../utils/cart/core/addProduct'

const ActionsProductsContainer = props => {
    return (
        <div className="prd-bottom">
            {/*
             * Adicionar um produto ao carrinho
             */}
            <div className="social-info">
                <span className="ti-bag" 
                onClick={() => addProduct(props.itemProdut)}></span>
                <p className="hover-text">Adicionar</p>
            </div>

            {/*
             * Adicionar o produto aos favoritos*/
             }
            <div className="social-info">
                <span className="lnr lnr-heart"></span>
                    <p className="hover-text">Favoritos</p>
            </div>
        </div>
    )
}

export default ActionsProductsContainer