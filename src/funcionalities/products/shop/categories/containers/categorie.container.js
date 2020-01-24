import React, {useEffect, useReducer} from "react"
import {categorie} from '../actions/categories.action'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {LISTING_CATEGORIES} from '../constants/categories.constants'

const CategorieContainer = props => {

    const {categorie} = props

    useEffect(()=>{ 
        categorie()
    })

    return (
        <></>
    )
}

const mapDispatchToProps = (dispatch) =>(bindActionCreators({categorie}, dispatch))
export default connect(null, mapDispatchToProps)(CategorieContainer)