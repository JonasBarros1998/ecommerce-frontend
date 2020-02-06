import React, { useState, useCallback, useLayoutEffect } from 'react'
import DeleteContainer from '../container/deleteContainer'
import '../../css/main.css'
import SelectContainer from '../container/selectContainer'
import { Link } from 'react-router-dom'

const searchLocalStorage = () => (JSON.parse(localStorage.getItem('cart')))
const saveLocalStorage = (itensCart) => (localStorage.setItem('cart', itensCart))
    
const itensCart = () => {
    let calculate = 0
    for (let { price: priceProduct } of searchLocalStorage()) {
        calculate += priceProduct
    }
    return calculate
}

const Cart = () => {
    const [item, setItem] = useState(searchLocalStorage)
    const [valueCart, setValueCart] = useState(0)

    useLayoutEffect(() => {
        setValueCart(itensCart())
    }, [])

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
    }, [item, valueCart]);

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
    }, [item])

    const deleteItem = (productId) => {
        const newCart = []

        item.map(item => {
            if (productId !== item._id) {
                newCart.push(item)
            }
        })

        const ItensCartForStringfy = JSON.stringify(newCart)
        saveLocalStorage(ItensCartForStringfy)
        setItem(newCart)
        setValueCart(itensCart())
    }

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
                            <tbody>
                                {
                                    item.map((itens, index) => {
                                        return (<tr key={index}>
                                            <td colSpan="4">
                                                <div className="media">
                                                    <div className="block-image">
                                                        <img className="image" src={itens.link} alt="ImageProduct" />
                                                    </div>
                                                    <div className="media-body">
                                                        <p className="text-grey-p">
                                                            <Link to={`/produto/item/${itens.categorie}/${itens.name}/${itens.productId}`} className="text-grey-p link">
                                                                {itens.name}
                                                            </Link>
                                                            <br />
                                                            <DeleteContainer
                                                                deleteItem={deleteItem}
                                                                productId={itens._id} />
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <SelectContainer
                                                    sumQuantity={sumQuantity}
                                                    subQuantity={subQuantity}
                                                    quantity={itens.quantity}
                                                    productId={itens.productId}
                                                    valueCart={valueCart} />
                                            </td>
                                            <td>
                                                <p className="text bold">{
                                                    itens.price.toLocaleString('pt-BR', {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })
                                                }</p>
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
                                        <p className="text bold">{
                                            valueCart.toLocaleString('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL'
                                            })
                                        }</p>
                                    </td>
                                </tr>
                            </tbody>
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
                                    <button type="submit" className="btn genric-btn success radius mr-3">Fechar carrinho</button>
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