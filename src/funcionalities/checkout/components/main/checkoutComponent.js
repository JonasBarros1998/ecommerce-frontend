/**
 * Esse componente vai renderizar o banner(BannerCrumbComponent), 
 * endereço de entrega(DeliveryAddressComponent), e escolha do frete(ShippingRateComponent),
 * pagementos(paymentComponent), 
 */
import React from 'react'
import ShippingRateComponent from '../shippingRate/shippingRateComponent'
import BannerCrumbComponent from '../../../../components/banner/bannerCrumbComponent'
import DeliveryAddressComponent from '../deliveryAddress/deliveryAddressComponent'
import PaymentComponent from '../payment/paymentComponent'
import OrderItensComponent from '../orderItens/orderItensComponent'
import Footer from '../../../../components/footer/footerComponent.js'

const CheckoutComponent = () => {
    return (
        <>
            <div className="mb-5">
                <BannerCrumbComponent />
            </div>

            <div className="row ml-3 mr-3">
                <div className="col-12 col-sm-12 col-lg-8">
                    {/** Componente para escolha do frete **/}
                    <ShippingRateComponent />

                    {/**Componente para pagamento com o mercado pago */}
                    <PaymentComponent />
                </div>

                {/** Componente de endereço de entrega, listagem de itens **/}
                <div className="col-12 col-sm-12 col-lg-4">
                    <DeliveryAddressComponent />
                    <OrderItensComponent />
                </div>

            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default CheckoutComponent