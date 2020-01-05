import React, {useEffect} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux' 
import {listComment} from '../actions/list.action'

const ListReviewContainer = props => {
    
    const {listComment, productId} = props
    
    useEffect(()=>{
        listComment(productId)
    })

    return (
        <div></div>
    )
}

const mapDispatchToProps = dispatch => (bindActionCreators({listComment}, dispatch))
export default connect(null, mapDispatchToProps)(ListReviewContainer)