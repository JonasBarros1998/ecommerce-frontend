/**
 * Esse componente tem as seguintes responsabilidades: 
 * 
 * Renderizar todos os itens comprados pelo cliente. 
 * Renderizar o preço total do carrinho.
 * Excluir um item do carrinho do cliente.  
 */
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexedDatabase } from '../database/indexedDatabase'
import { listingObjectStore } from '../database/transactions'
import ValueTotal from '../container/valueTotal'
import SelectContainer from '../container/selectContainer'
import DeleteContainer from '../container/deleteContainer'

const connect = {
    name: 'ecommerce-cart',
    version: 1,
    type: 'readwrite'
}
const ListingAllProductContainer = props => {
    
    return (
        <>
            {
                props.cart.map((item, index) => {

                    return (<tr key={index}>
                        <td colSpan="4" >
                            <div className="media">
                                <div className="block-image">
                                    <img className="image" src={item.link} alt="ImageProduct" />
                                </div>
                                <div className="media-body">
                                    <p className="text-grey-p">
                                        {
                                            <Link to={`/produto/item/${item.categorie}/${item.name}/${item.productId}`} className="text-grey-p link">
                                                {item.name}
                                            </Link>
                                        }
                                        <br />
                                        <DeleteContainer deleteItem={item} />
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>
                            {/** Select Container*/}
                            <SelectContainer itemCart={item} />
                        </td>
                        <td>
                            {
                                <p className="text bold">{
                                        item.price.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })
                                    }</p>
                            }
                        </td>
                    </tr>)
                })
            }

            <tr>
                <td colSpan="4"></td>
                <td>
                    <p className="text bold">Valor total</p>
                </td>
                <td>

                    {/**Componente para renderizar o valor total do carrinho**/
                        props.cart.length === 0
                            ?
                            <div></div>
                            :
                            <ValueTotal value={props.cart} />
                    }

                </td>
            </tr>
            </>
    )
}

export default ListingAllProductContainer