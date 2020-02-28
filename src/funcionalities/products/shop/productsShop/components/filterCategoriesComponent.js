import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectCategorie } from '../action/filter/filter.categorie'

const FilterCategoriesComponent = props => {
    return (<div className="sidebar-categories">
        <div className="head colorb-default">Categorias</div>
        <ul className="main-categories list">
            {
                props.categories.map((item, index) => {
                    return (<li className="main-nav-list"
                        key={index}
                        onClick={() => props.selectCategorie(item.categories) }>
                        <a data-toggle="collapse" href={"http://localhost:3000"} aria-expanded="false"
                            aria-controls="fruitsVegetable" >
                            {item.categorie}
                        </a>
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