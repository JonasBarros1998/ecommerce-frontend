/**
 *  Esse modulo está vazio, porque por hora não 
 * precisamos ter que reinderizar nenhum elemento
 * seu unico objetivo é retirar a responsabilidade 
 * dos componentes terem muito conhecimento sobre
 * nossas actions, ou seja retiramos a responsabilidade
 * dos componentes terem que reinderizar as dispatch
 */
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { slides } from '../actions/slide.action.js'
import React, { Fragment, useEffect } from 'react'

const SlidesContainer = props => {

    const {slides} = props

    useEffect(() =>{
        slides()
    })

    return (
        <Fragment>
            {/* Esse componente por hora não vai 
            reinderizar nenhum elemento*/}
        </Fragment>
    )
}

const mapDispatchToProps = dispatch => {
    console.log("OK, entrou no componente de slide")
    return bindActionCreators({ slides }, dispatch)
}

export default connect(null, mapDispatchToProps)(SlidesContainer)

