import React from 'react'
import {Quantity} from '../../../../funcionalities/products/container/product.container'

const InfoProductComponent = props => {

    return (
        props.infoProduct.map((itemProduct, index) => {
            return (
                <div key={index}>
                    <h3>{itemProduct.products.title}</h3>
                    <h2 className="color-default">{
                        itemProduct.products.price.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })
                    }</h2>

                    <ul className="list">
                        <li>
                            <small>Categoria</small>: <small className="color-default">
                                {itemProduct.products.categories}
                            </small>
                        </li>

                        <li>
                            <small>Disponível</small>: <small>{itemProduct.products.amount} items</small>
                        </li>
                    </ul>

                    <p>{itemProduct.products.description}</p>

                    <div className="product_count">
                        <Quantity />
                    </div>
                </div>
            )
        })
    );
}

export default InfoProductComponent