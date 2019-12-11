import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authentication } from '../actions/authenticate.action.js';


const AuthenticateContainer = props => {

    const [email, setEmail] = useState("")
    const [password, setPasword] = useState("")

    const {
        authentication
    } = props

    return (
        <form className="row login_form"
            id="contactForm"
            method="post"
            onSubmit={e => {
                e.preventDefault();
                authentication({ password: password.value, email: email.value })
            }}>
            <div className="col-md-12 form-group">
                <input type="text" className="form-control" id="name" name="name"
                    placeholder="Nome"
                    ref={(stateEmail) => setEmail(email => email = stateEmail)} />
            </div>

            <div className="col-md-12 form-group">
                <input type="password" className="form-control" id="password" name="password"
                    placeholder="Senha"
                    ref={(statePassword) => setPasword(password => password = statePassword)} />
            </div>

            <div className="col-md-12 form-group">
                <button type="submit" 
                             value="submit" 
                             className="primary-btn">Acessar</button>

                <a href={"http://localhost:4000"}>Esqueceu sua senha</a>
            </div>
        </form>
    );
}

const mapDispatchToProps = dispatch => (bindActionCreators({ authentication }, dispatch))

export default connect(null, mapDispatchToProps)(AuthenticateContainer)