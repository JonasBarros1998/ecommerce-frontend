import React, { useEffect } from 'react'
import { verifieldLocalStorage } from '../actions/deliveryAddress/delivaryAddres.action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const SearchAddressContainer = props => {
    useEffect(() => {
        props.verifieldLocalStorage()
    })
    return (
        <></>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ verifieldLocalStorage }, dispatch)
export default connect(null, mapDispatchToProps)(SearchAddressContainer)  