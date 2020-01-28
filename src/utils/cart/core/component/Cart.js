import React from 'react'

const Cart = props => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col" colSpan="4" className="text-grey-p">Produto</th>
                                    <th className="text-grey-p">Quantidade</th>
                                    <th className="text-grey-p">Preço</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan="4">
                                        <div className="media">
                                            <div className="d-flex">
                                                <img src="img/cart.jpg" alt="" />
                                            </div>
                                            <div className="media-body">
                                                <p className="text-grey-p">Minimalistic shop for multipurpose use</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <select className="custom-select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                        </select>
                                    </td>
                                    <td>
                                        <p className="text-grey-p">R$ 300, 00</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td colSpan="4"></td>
                                    <td>
                                        <p className="text-grey-p">valor total</p>
                                    </td>
                                    <td className="text-grey-p">
                                        <p className="text-grey-p">R$ 400,00</p></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="col-4">
                        <div className="p-2 bd-highlight">
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
                    </div>

                    <div className="col-12">
                        <div className="d-flex flex-row-reverse bd-highlight">
                            <div className="p-2 bd-highlight">
                                <button type="submit" className="btn genric-btn success radius">Fechar carrinho</button>
                            </div>

                            <div className="p-2 bd-highlight">
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
