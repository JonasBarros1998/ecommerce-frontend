/**
 * Contaier para envio de link de alteração de senha para o email 
 * do usuario cadastrado
 */

import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { submitEmail } from '../../actions/forgotPassword/submitLink.action'
const SubmitUrl = props => {

    const [email, setEmail] = useState("")

    return (
        <div className="login_form login_form_inner padding_top_bottom_3 padding_top_bottom_2" >
            <h3 className="text-center">e-mail de usuário</h3>
            <div className="col-md-12 form-group">
                <input type="email" className="form-control"
                    name="verifield" placeholder="e-mail"
                    ref={(stateEmail) => setEmail(email => email = stateEmail)} />
            </div>
            <div className="col-md-12 d-flex justify-content-center">
                <button type="button" 
                value="submit" 
                class="genric-btn success text-uppercase mt-2 mb-3"
                onClick={() => props.submitEmail(email.value)}>Prosseguir</button>
            </div>
            <small className="color-gris-default pl-3 pr-3">Identifique-se para receber um e-mail com as instruções e o link
                <br />para criar uma nova senha.</small>
        </div>
    )
}
const mapDispatchToProps = dispatch => (bindActionCreators({ submitEmail }, dispatch))
export default connect(null, mapDispatchToProps)(SubmitUrl) 