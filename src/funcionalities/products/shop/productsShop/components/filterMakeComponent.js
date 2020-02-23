/**
 * Componente responsavel por renderizar todas as 
 * marcas de produtos vendidos no ecommerce
 */
import React from 'react'
import { connect } from 'react-redux'
import MakeContainer from '../container/filter/make.container'

const MakeComponent = props => {
    return (
        <>
            <MakeContainer />
            <div className="common-filter">
                <div className="head">Marcas</div>
                <form action="#">
                    <ul className="list">
                        {
                            props.make.map((item, index) => (
                                <li className="filter-list" key={index}>
                                    <input className="pixel-radio" type="radio" id="item"
                                        name="brand" />
                                    <label>{item.make}</label>
                                </li>
                            ))
                        }
                    </ul>
                </form>
            </div>
        </>
    );
}
const mapStateToProps = store => ({ make: store.products.make })
export default connect(mapStateToProps)(MakeComponent)