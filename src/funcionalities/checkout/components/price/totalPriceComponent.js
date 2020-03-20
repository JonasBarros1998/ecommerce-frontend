import React from 'react'
import { connect } from 'react-redux'

const TotalPriceComponent = props => {
    return (
        <>
            <div className="pt-3 pl-2 pr-2 pb-1 mt-2 colorb-gray97">
                {
                    props.listingAllProduct.map((item, index) => {
                        return (
                            <div className="row" key={index}>
                                <h5 className=" color-grimmys-grey col-6">Total</h5>
                                <p className=" color-grimmys-grey col-6 text-right">
                                    {item.price.toLocaleString('pt-br', {
                                        style: "currency",
                                        currency: "BRL"
                                    })}</p>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}


const mapStateToProps = store => {
    return {
        listingAllProduct: store.checkout.listingAllProduct
    }
}
export default connect(mapStateToProps)(TotalPriceComponent)