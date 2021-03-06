/**
 * Esse componente tem as seguintes responsabilidades: 
 * 
 * Renderizar todos os itens comprados pelo cliente. 
 * Renderizar o preço total do carrinho.
 * Excluir um item do carrinho do cliente.  
 */
import React from 'react'
import { Link } from 'react-router-dom'

import ValueTotal from '../container/valueTotal'
import SelectContainer from '../container/selectContainer'
import DeleteContainer from '../container/deleteContainer'

const ListingAllProductContainer = props => {
    console.log(props)
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
                                            <Link to={`/item/${item.categorie}/${item.name.replace(/ /gi, "_")}/${item.id}`} className="text-grey-p link">
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