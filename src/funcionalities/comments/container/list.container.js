import React, {useEffect} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux' 
import {saveComment} from '../actions/listComment.action'

const ListCommentContainer = props => {
    
    const {saveComment, productId} = props

    useEffect(()=>{
        saveComment(productId)
    })

    return (
        <>
        </>
    )
}

const mapDispatchToProps = dispatch => (bindActionCreators({saveComment}, dispatch))
export default connect(null, mapDispatchToProps)(ListCommentContainer)