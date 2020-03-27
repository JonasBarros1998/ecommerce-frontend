import React, { useState, useCallback, useLayoutEffect } from 'react'
import DeleteContainer from '../container/deleteContainer'
import SelectContainer from '../container/selectContainer'
import ListingAllProductContainer from '../container/listingAllProductContainer'
import '../../css/main.css'
import { Link } from 'react-router-dom'



const searchLocalStorage = () => (JSON.parse(localStorage.getItem('cart')))

//Calcular o preço total do carrinho
/*
const totalPrice = () => {
    let calculate = 0
    for (let { price: priceProduct } of searchLocalStorage()) {
        calculate += priceProduct
    }
    return calculate
}*/

const Cart = props => {

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan="4" className="text">Produto</th>
                                    <th scope="col" className="text">Quantidade</th>
                                    <th scope="col" className="text">Preço</th>
                                </tr>
                            </thead>
                           {/***adicionar a tbody */}
                            <ListingAllProductContainer /> 
                        </table>
                    </div>

                    <div className="col-12">
                        <div className="d-flex flex-row bd-highlight mb-3">

                            <div className="col-4">
                                <div className="input-group">
                                    <input type="text" className="form-control"
                                        placeholder="Cupom de desconto"
                                        aria-label="Recipient's username"
                                        aria-describedby="button-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn genric-btn success radius"
                                            type="button"
                                            id="button-addon2">Aplicar</button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end col-8">
                                <Link to={props.link} className="btn genric-btn success radius mr-3"> Fechar Carrinho</Link>
                                <button type="submit" className="btn genric-btn info radius">Continuar comprando</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart



  //const [item, setItem] = useState(searchLocalStorage)
    //const [valueCart, setValueCart] = useState(0)

    //useLayoutEffect(() => {
   //     setValueCart(totalPrice())
   // }, [])
/*
    const sumQuantity = useCallback((productId, valueCartTotal) => {
        const product = item.find(id => id.productId === productId)
        if (product.quantity === undefined) {
            Object.defineProperty(product, 'quantity', {
                enumerable: true,
                value: + 2,
                writable: true
            })

        } else {
            Object.defineProperty(product, 'quantity', {
                enumerable: true,
                value: product.quantity += 1,
                writable: true
            })
        }
        setValueCart(valueCartTotal + product.price)
        setItem([...item])
    }, [item]);*/
/*
    const subQuantity = useCallback((productId, valueCartTotal) => {
        const product = item.find(id => id.productId === productId)
        if (product.quantity <= 1 || product.quantity === undefined) {
            Object.defineProperty(product, 'quantity', {
                enumerable: true,
                value: product.quantity = 1,
                writable: true
            })
        } else {
            Object.defineProperty(product, 'quantity', {
                enumerable: true,
                value: product.quantity -= 1,
                writable: true
            })
            setValueCart(valueCartTotal - product.price)
        }

        setItem([...item])
    }, [item])*/




    /*
    //Excluir um item no carrinho
    const deleteItem = () => {
        const newCart = []


        //item.map(item => productId !== item._id ? 
        //    newCart.push(item) : 
        //    console.warn("Não existe produto para ser deletado"))
        //const ItensCartForStringfy = JSON.stringify(newCart)
        //saveLocalStorage(ItensCartForStringfy)
        //setItem(newCart)
        //setValueCart(totalPrice())
    }*/