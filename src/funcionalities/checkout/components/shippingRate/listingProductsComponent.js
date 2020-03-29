/**
 * Componente especifico para renderizar os produtos que o cliente comprou
 */
import React, { Fragment } from 'react'

const ListingProductsComponent = props => {
    return (
        <div className="row">
        {
            props.products.map((itens, index) => {
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
                    </ Fragment>
                )
            })
        }
    </div>
    )

}

export default ListingProductsComponent