import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { categories } from '../../action/filter/filter.categorie'

const CategorieContainer = (props) => {
    const { categories } = props
    useEffect(() => {
        categories()
    })
    return (
        <>
        </>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ categories }, dispatch) 
export default connect(null, mapDispatchToProps)(CategorieContainer)


