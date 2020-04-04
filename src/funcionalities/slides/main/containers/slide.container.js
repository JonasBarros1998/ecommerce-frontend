/** 
 * Componente para listagem dos produtos nos slides
*/
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { slides } from '../actions/slide.action.js'
import React, { useEffect } from 'react'

const SlidesContainer = props => {

    const { slides } = props

    useEffect(() => {
        slides()
    })

    return (
        <>
        </>
    )
}

const mapDispatchToProps = dispatch => (bindActionCreators({ slides }, dispatch))

export default connect(null, mapDispatchToProps)(SlidesContainer)

