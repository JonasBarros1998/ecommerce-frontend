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

const connect = {
    name: 'ecommerce-cart',
    version: 1,
    type: 'readwrite'
}
const ListingAllProductContainer = () => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        indexedDatabase(connect).then(connection => {
            listingObjectStore(connection, connect)
                .then(response => {
                    setCart(response)
                })
        })

    }, [])

    return (
        console.log(cart),
        <tbody>
            {
                cart.map(item => {

                    return (<tr>
                        <td colSpan="4">
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
                                        {/** 
                                    <DeleteContainer
                                        deleteItem={deleteItem}
                                        productId={itens._id} />
                                        
                                        <DeleteContainer />
                                        **/}
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>
                            {
                                <SelectContainer itemCart={item} />
                            }
                        </td>
                        <td>
                            {
                                <p className="text bold"
                                    itemCart={item}>{
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
                        cart.length == 0
                            ?
                            <div></div>
                            :
                            <ValueTotal value={cart} />
                    }

                </td>
            </tr>
        </tbody >
    )
}

export default ListingAllProductContainer