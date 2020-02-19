import React, { useState } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { submitVerifieldEmail } from '../actions/verifieldEmail.action'
import { Link } from 'react-router-dom'

const VerifieldEmailContainer = props => {

    const [email, setEmail] = useState("")

    const {
        submitVerifieldEmail
    } = props

    return (
        <form className="row login_form"
            method="post"
            onSubmit={(e) => {
                e.preventDefault()
                submitVerifieldEmail({ email: email.value })
            }}>
            <div className="col-md-12 form-group">
                <input type="email" className="form-control"
                    name="verifield" placeholder="e-mail" ref={(stateEmail) => setEmail(email => email = stateEmail)} />
            </div>

            <div className="col-md-12 form-group">
                <button type="submit" value="submit" className="primary-btn">Prosseguir</button>
            </div>
        </form>
    )
}

export default VerifieldEmailContainer

//const mapDispatchToProps = dispatch => (bindActionCreators({ submitVerifieldEmail }, dispatch))
//export default connect(null, mapDispatchToProps)(VerifieldEmailContainer)