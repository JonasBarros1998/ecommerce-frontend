import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { selectCategorie } from '../../action/filter/filter.categorie'

const SelectCategorieContainer = props => {
    return (
        <>
            <span onClick={() => props.selectCategorie(props.name)}>{}</span>
        </>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectCategorie }, dispatch)
export default connect(null, mapDispatchToProps)(SelectCategorieContainer)