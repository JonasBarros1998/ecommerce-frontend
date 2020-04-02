import React, { useEffect } from 'react'
import { address } from '../actions/deliveryAddress/delivaryAddres.action'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const SearchAddressContainer = props => {
    useEffect(() => {
        props.address()
    })
    return (
        <></>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ address }, dispatch)
export default connect(null, mapDispatchToProps)(SearchAddressContainer)  