/**
 * Componente para renderização do filtro de categorias
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCategorie } from '../action/filter/filter.categorie'
import CategorieContainer from '../container/filter/categorie.cotainer'

const FilterCategoriesComponent = props => {

    return (
        <div>
            <CategorieContainer />
            <div className="sidebar-categories ">
                <div className="head colorb-default"
                    data-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1">Categorias</div>
                <ul className="main-categories list collapse multi-collapse"
                    id="multiCollapseExample1">
                    {
                        props.categories.map((item, index) => {
                            return (<li className="main-nav-list"
                                key={index}
                                onClick={() => props.selectCategorie(item.categorie)}>
                                <button className="link-button">{item.categorie}</button>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectCategorie }, dispatch)
const mapStateToProps = store => ({ categories: store.products.categories })
export default connect(mapStateToProps, mapDispatchToProps)(FilterCategoriesComponent)