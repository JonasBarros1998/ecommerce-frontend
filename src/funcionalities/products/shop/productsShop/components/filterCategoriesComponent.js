import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCategorie } from '../action/filter/filter.categorie'

const FilterCategoriesComponent = props => {

    return (<div className="sidebar-categories ">
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
                        <a href={"http://localhost:3000"}>{item.categorie}</a>
                    </li>
                    )
                })
            }
        </ul>
    </div >
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectCategorie }, dispatch)
const mapStateToProps = store => ({ categories: store.products.categories })
export default connect(mapStateToProps, mapDispatchToProps)(FilterCategoriesComponent)