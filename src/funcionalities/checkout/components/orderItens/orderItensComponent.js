/**Componente para rendereizar o itens que o cliente comprou
 * Nome, quantidade e preço, e o valor total do para pagamento
 */

import React from 'react'
import TotalPriceComponent from '../price/totalPriceComponent'

const OrderItensComponent = () => {
    return (
        <>
            <div className="card billing_details mt-3">
                <div className="card-header">
                    <div className="row">
                        <div className="col-5 pd-0">
                            <b>Itens de pedido</b>
                        </div>
                        <div className="col-3 pd-0">
                            <div><b>Qtde</b></div>
                        </div>
                        <div className="col-4 pd-0">
                            <div><b>Preço</b></div>
                        </div>
                    </div>
                </div>

                <div className="card-body">
                    <div className="row">
                        <div className="col-5 p-0">
                            <p className="text-grey-p">
                                Tenis adidas 2019 edição especial
                            </p>
                        </div>
                        <div className="col-3">
                            <p className="text-grey-p">3</p>
                        </div>

                        <div className="col-4 p-0">
                            <p className="text-grey-p">R$ 540,00</p>
                        </div>
                    
                    </div>

                    <div className="row">
                        <div className="col-5 p-0">
                            <p className="text-grey-p">
                                Tenis adidas 2019 edição especial
                            </p>
                        </div>
                        <div className="col-3">
                            <p className="text-grey-p">3</p>
                        </div>

                        <div className="col-4 p-0">
                            <p className="text-grey-p">R$ 540,00</p>
                        </div>
                    
                    </div>
                </div>

            </div>

            <TotalPriceComponent />
        </>

    )
}
export default OrderItensComponent
