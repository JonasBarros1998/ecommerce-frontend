import React from 'react'
import { connect } from 'react-redux'

const FilterCategoriesComponent = props => {

    return (<div className="sidebar-categories">
            <div className="head colorb-default">Categorias</div>
            <ul className="main-categories list">
                {
                    props.categories.map((item, index) => {
                        return <li className="main-nav-list" key={ index } >
                            <a data-toggle="collapse" href="#fruitsVegetable" aria-expanded="false" aria-controls="fruitsVegetable">
                                { item.categories }
                            </a>
                        </li>
                    })
                }
            </ul>
        </div >
    )
}

const mapStateToProps = store => ({ categories: store.products.categories })
export default connect(mapStateToProps)(FilterCategoriesComponent)