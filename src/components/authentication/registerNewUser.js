import React, { Component, Fragment } from 'react'
import Input from '../forms/inputComponent.js'

export default class RegisterNewUser extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            dataNascimento: '',
            cpf: '',
            residentialPhone: '',
            phone: '',
            email: '',
            password: '',
            passwordRepeat: ''
        }
    }

    updateInput(name, event) {
        const input = {}
        input[name] = event.target.value
        this.setState(input)
    }

    render() {
        return (
            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-xl-11 col-sm-12">
                            <div className="login_form_inner_2">
                                <form className="row contact_form" method="post">

                                    <div className="col-sm-6 col-12">
                                        <div className="row">

                                            <div className="col-md-12 form-group">
                                                <Input type='text' className='form-control ' id='name' name='name' label="Nome"
                                                    onChange={this.updateInput.bind(this, 'name')} value={this.state.name} />
                                            </div>

                                            <div className="col-12 col-md-12 col-lg-6  form-group">
                                                <Input type='date' className='form-control' id='date' name='date' placeholder='Data de nascimento' label='Data de nascimento'
                                                    onChange={this.updateInput.bind(this, 'date')} value={this.state.dataNascimento} />
                                            </div>

                                            <div className="col-md-5 col-5 col-lg-3 form-group custom-control custom-radio d-flex align-items-center padding_left_4">
                                                <Input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customRadio1">Masculino</label>
                                            </div>

                                            <div className="col-md-5 col-5 col-lg-3 form-group custom-control custom-radio d-flex align-items-center">
                                                <Input type="radio" id="customRadio2" name="customRadio"
                                                    className="custom-control-input" />
                                                <label className="custom-control-label" htmlFor="customRadio2">Feminino</label>
                                            </div>

                                            <div className="col-md-12 col-12 form-group">
                                                <Input type="number" className="form-control" id="cpf" name="cpf"
                                                    placeholder="000-000-000.00" label="Cpf"
                                                    onChange={this.updateInput.bind(this, 'cpf')} value={this.state.cpf} />
                                            </div>

                                            <div className="col-md-6 col-12 form-group">
                                                <Input type='number' className='form-control' id='smphoneartPhone'
                                                    name='phone' placeholder='(00) 00000-0000' label='Telefone celular'
                                                    onChange={this.updateInput.bind(this, 'phone')} value={this.state.phone} />
                                            </div>

                                            <div className="col-md-6 col-12 form-group">
                                                <Input type="number" className="form-control" id="residentialPhone"
                                                    name="residentialPhone" placeholder="(00) 0000-0000" label="Telefone residêncial"
                                                    onChange={this.updateInput.bind(this, 'residentialPhone')} value={this.state.residentialPhone} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-12">
                                        <div className="row">

                                            <div className="col-12 form-group">
                                                <Input type='email' className='form-control' id='email'
                                                    name='email' placeholder='exemplo@exemplo.com' label='e-mail'
                                                    onChange={this.updateInput.bind(this, 'email')} value={this.state.email} />
                                            </div>

                                            <div className="col-md-12 col-12 form-group">
                                                <Input type='password' className='form-control' id='password'
                                                    name='password' onChange={this.updateInput.bind(this, 'password')} label='Senha'
                                                    value={this.state.password} />
                                            </div>

                                            <div className="col-md-12 col-12 form-group">
                                                <Input type='password' className='form-control' id='password' label='Confirme a senha'
                                                    name='passwordRepeat' onChange={this.updateInput.bind(this, 'passwordRepeat')}
                                                    value={this.state.passwordRepeat} />
                                            </div>
                                        </div>
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