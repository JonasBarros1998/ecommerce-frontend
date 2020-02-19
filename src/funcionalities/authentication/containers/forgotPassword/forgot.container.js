import React, { useState } from 'react'
import { alterPassword } from '../../actions/forgotPassword/forgot.action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const ForgotPasswordContainer = props => {

    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")
    const { alterPassword } = props

    return (<form className="row login_form"
            id="contactForm"
            method="post"
            onSubmit={e => {
                e.preventDefault();
                alterPassword({
                   "newPassword": password.value, 
                   "repeat": repeatPassword.value
                   })
            }}>
            <div className="col-md-12 form-group">
                <input type="password" className="form-control" id="password"
                    name="password" placeholder="Senha"
                    ref={(statePassword) => setPassword(password => password = statePassword)} />
            </div>

            <div className="col-md-12 form-group">
                <input type="password" className="form-control" id="repeatPassword"
                    name="repeatPassword" placeholder="Confirme sua senha"
                    ref={(stateRepeatPassword) => setRepeatPassword(repeatPassword => repeatPassword = stateRepeatPassword)} />
            </div>

            <div className="col-md-12 form-group">
                <button type="submit"
                    value="submit"
                    className="primary-btn">Salvar</button>
            </div>
        </form>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ alterPassword }, dispatch)
export default connect(null, mapDispatchToProps)(ForgotPasswordContainer)