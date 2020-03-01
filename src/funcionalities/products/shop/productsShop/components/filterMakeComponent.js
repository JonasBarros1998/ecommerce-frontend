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
    return (
        <>
            <MakeContainer />
            <div className="colorb-default top-filter-head">Filtros</div>
            <div className="common-filter">
                <div className="head"
                    data-toggle="collapse"
                    href="#multiCollapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2">
                    <div className="d-flex" >
                        <div className="mr-auto">Marcas</div>
                        <div>+</div>
                    </div>
                </div>
                    <ul className="list collapse multi-collapse"  id="multiCollapseExample2">
                        {
                            props.make.map((item, index) => (
                                <li className="filter-list"
                                    key={index}
                                    data-toggle="collapse"
                                    aria-expanded="false">
                                    <input className="pixel-radio" type="radio"
                                        id="item" name="brand"
                                        onClick={() => props.selectMake(item.make)} />
                                    <label>{item.make}</label>
                                </li>
                            ))
                        }
                        <li className="filter-list">
                            <input className="pixel-radio" type="radio"
                                id="item" name="brand" />
                            <label>OK- churros</label>
                        </li>
                        <li className="filter-list">
                            <input className="pixel-radio" type="radio"
                                id="item" name="brand" />
                            <label>OK- churros</label>
                        </li>
                    </ul>
            </div>
        </>
    );
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectMake }, dispatch)
const mapStateToProps = store => ({ make: store.products.make })
export default connect(mapStateToProps, mapDispatchToProps)(MakeComponent)