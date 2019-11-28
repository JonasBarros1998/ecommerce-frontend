import React, { Component } from 'react'
import Login from '../../authentication/login'

class loginComponent extends Component {

    constructor() {
        super()
        this.state = { name: "", password: "", verifield: "" }
        this.credentials = this.credentials.bind(this)
        this.login = new Login()
    }
    
    stateInputs(name, event) {
        let input = {}
        input[name] = event.target.value
        this.setState(input)
    }

    credentials(event) {

        event.preventDefault()
        this.login.authentication(this.state)
    }

    render() {

        return (
            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Faça o login</h3>
                                <form className="row login_form" id="contactForm" method="post" onSubmit={this.credentials}>
                                    <div className="col-md-12 form-group">
                                        <input type="text" className="form-control" id="name" name="name" 
                                        placeholder="Nome" onChange={this.stateInputs.bind(this, 'name')} value={this.state.name} />
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <input type="password" className="form-control" id="password" name="password" 
                                                    placeholder="Senha" onChange={this.stateInputs.bind(this, 'password')} value={this.state.password} />
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn">Acessar</button>
                                        <a href={"block"}>Esqueceu sua senha</a>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Crie sua conta</h3>
                                <form className="row login_form" method="post">
                                    <div className="col-md-12 form-group">
                                        <input type="email" className="form-control"
                                                    name="verifield" placeholder="e-mail" value={this.state.verifield} 
                                                    onChange={this.stateInputs.bind(this, 'verifield')} />
                                    </div>

                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn">Prosseguir</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default loginComponent