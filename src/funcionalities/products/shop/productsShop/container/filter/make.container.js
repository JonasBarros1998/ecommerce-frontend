import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { make } from '../../action/filter/filter.make'

const MakeContainer = props => {

    useEffect(() => {
        props.make()
    })
    return (
        <>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ make }, dispatch)
export default connect(null, mapDispatchToProps)(MakeContainer)
