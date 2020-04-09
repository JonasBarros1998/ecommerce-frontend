/**
 * Esse modulo faz parte da reinderização do carrinho do ecommerce, ou seja
 * ao clicar no botão, o produto será adicionado no carrinho 
 */
import React from 'react'
import BannerCrumbComponent from '../banner/bannerCrumbComponent'
import Cart from '../../utils/cart/core/component/Cart'
import Footer from '../footer/footerComponent'

const CartComponent = () => {

    return (
        <>
            <BannerCrumbComponent />
            <div className="padding_top_6">
                <Cart />
                <div className="mt-5">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default CartComponent