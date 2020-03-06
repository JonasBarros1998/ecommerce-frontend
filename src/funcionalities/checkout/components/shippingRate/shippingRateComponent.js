/**
 * Comoponete para renderização dos produtos comprados, para que o cliente escolha o frete que desejar.
 */
import React, { useEffect, useState, Fragment } from 'react'

const ShippingRateComponent = () => {

    const [itensCart, setItensCart] = useState([])

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart'))
        setItensCart(cart)
    }, [])
    return (
        <>
            <div className="cyan-default mb-1">
                <h5 className="color-white-default bc-cyan pt-2 pb-2 pl-3"
                id="payment">Pagamento</h5>
            </div>
            <h5 className="pt-2" id="escolher_entrega">Qual tipo de entrega você deseja?</h5>
            <hr />
            <div className="card">
                <p className="mt-2 ml-2 fs" id="delivery"> 
                <b>Vendido e entregue por J&M ecommerce</b></p>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-sm-10 col-md-7 col-lg-8 col-xl-6">

                            <div className="row">
                                {
                                    itensCart.map((itens, index) => {
                                        return (
                                            <Fragment key={index}>
                                                <div className="ml-3 mb-2">
                                                    <img className="image" src={itens.link} alt="ImageProduct" />
                                                </div>
                                                <div className="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-7 pl-1">
                                                    <p className="text-grey-p ml-1">
                                                        {itens.name}<br />
                                                        categoria:
                                                        {itens.categorie}
                                                    </p>
                                                </div>
                                            </Fragment>
                                        )
                                    })
                                }

                            </div>
                        </div>


                        <div className="col-12 col-md-5 col-lg-12 mtr-2 col-xl-6">
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="pr-4">
                                            <div className="custom-control custom-radio ">
                                                <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customRadio2">
                                                    <small className="color-grimmys-grey">Correios</small>
                                                </label>
                                            </div>
                                        </td>
                                        <td className="pr-4 color-grimmys-grey">
                                            <small>R$ 7, 40</small>
                                        </td>
                                        <td>
                                            <small className="color-grimmys-grey">Grátis</small>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4">
                                            <div className="custom-control custom-radio ">
                                                <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customRadio1">
                                                    <small className="color-grimmys-grey">Correios</small>
                                                </label>
                                            </div>
                                        </td>
                                        <td className="pr-4 color-grimmys-grey">
                                            <small>R$ 7, 40</small>
                                        </td>
                                        <td>
                                            <small className="color-grimmys-grey">Grátis</small>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShippingRateComponent