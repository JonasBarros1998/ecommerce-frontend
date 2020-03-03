import React from 'react'
import ShippingRateComponent from '../shippingRate/shippingRateComponent'
import BannerCrumbComponent from '../../../../components/banner/bannerCrumbComponent'
import DeliveryAddressComponent from '../deliveryAddress/deliveryAddressComponent'

const CheckoutComponent = () => {
    return (
        <>
            <div className="mb-5">
                <BannerCrumbComponent />
            </div>

            {/** Componente para escolha do frete **/}
            <div className="row ml-3 mr-3">
                <div className="col-12 col-sm-12 col-lg-8">
                    <ShippingRateComponent />
                </div>

                {/** Componente de endereço de entrega **/}
                <div className="col-12 col-sm-12 col-lg-4">
                    <DeliveryAddressComponent />
                </div>
            </div>
        </>
    )
}

export default CheckoutComponent