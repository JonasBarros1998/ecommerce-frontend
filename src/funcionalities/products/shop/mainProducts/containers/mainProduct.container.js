import React, {useEffect} from "react"
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {mainProduts} from '../action/mainProduct.action'


const MainProducts = props =>{



    
    const {mainProduts} = props
    useEffect(() =>{
        mainProduts()
    })
    return (
        <>
        </>
    )
} 

const mapDispatchToProps = dispatch => (bindActionCreators({mainProduts}, dispatch))
export default connect(null, mapDispatchToProps)(MainProducts)
