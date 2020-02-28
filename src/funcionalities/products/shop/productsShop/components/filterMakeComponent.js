/**
 * Componente responsavel por renderizar todas as 
 * marcas de produtos vendidos no ecommerce
 */
import React from 'react'
import { connect } from 'react-redux'
import MakeContainer from '../container/filter/make.container' 
import { bindActionCreators } from 'redux'
import { selectMake } from '../action/filter/filter.make'

const MakeComponent = props => {
    console.log(props)
    return (
        <>
            <MakeContainer />
            <div className="common-filter">
                <div className="head">Marcas</div>
                <form action="#">
                    <ul className="list">
                        {
                            props.make.map((item, index) => (
                                <li className="filter-list" 
                                key={index}>
                                    <input className="pixel-radio" type="radio" 
                                    id="item" name="brand"
                                    onClick = { () => props.selectMake(item.make) }/>
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

const mapDispatchToProps = dispatch => bindActionCreators({ selectMake }, dispatch)
const mapStateToProps = store => ({ make: store.products.make })
export default connect(mapStateToProps, mapDispatchToProps)(MakeComponent)