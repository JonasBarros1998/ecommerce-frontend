import React from 'react'
import ListingAllProductContainer from '../container/listingAllProductContainer'
import '../../css/main.css'
import { Link } from 'react-router-dom'

const Cart = props => {

    return (
        <div>
            {
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
                                    {/*adicionar a tbody */}
                                    <ListingAllProductContainer />

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
                                    <Link to={'/pagamento' } className="btn genric-btn success radius mr-3"> Fechar Carrinho</Link>
                                    <button type="submit" className="btn genric-btn info radius">Continuar comprando</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart