import React, { useEffect } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { purchase } from '../../actions/confirmation/confirmation.acton'

export const ConfimationContainer = props => {

    useEffect(() => {
        props.purchase()
    })

    return (
        <></>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ purchase }, dispatch)
export default connect(null, mapDispatchToProps)(ConfimationContainer)