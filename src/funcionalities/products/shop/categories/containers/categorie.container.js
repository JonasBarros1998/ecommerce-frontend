import React, {useEffect} from "react"
import {categorie} from '../actions/categories.action'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

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