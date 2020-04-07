import React, {useEffect} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux' 
import {comments} from '../actions/listComment.action'

const ListCommentContainer = props => {
    
    const {comments, productId} = props

    useEffect(()=>{
        comments(productId)
    })

    return (
        <>
        </>
    )
}

const mapDispatchToProps = dispatch => (bindActionCreators({comments}, dispatch))
export default connect(null, mapDispatchToProps)(ListCommentContainer)