import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectMake } from '../../action/filter/filter.make'

const SelectMakeContainer = props => {
    /*
    useEffect(() => {
        props.selectMake(props.name)
    })*/

    return (
        <>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectMake }, dispatch)
export default connect(null, mapDispatchToProps)(SelectMakeContainer)

