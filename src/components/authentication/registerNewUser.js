import React, { Component, Fragment } from 'react'
import Input from '../forms/inputComponent.js'
import Button from '../forms/buttonComponent'
import InputMask from 'react-input-mask'

export default class RegisterNewUser extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            birthDate: '',
            cpf: '',
            residentialPhone: '',
            phone: '',
            email: '',
            password: '',
            passwordRepeat: ''
        }
    }

    updateInput = (name, event) => {
        const input = {}
        input[name] = event.target.value
        this.setState(input)
    }

    render() {
        return (
            <form className="row contact_form" method="post">

                <div className="col-sm-6 col-12">
                    <div className="row">

                        <div className="col-md-12 form-group">
                            <Input type='text' className='form-control ' id='name' name='name' label="Nome"
                                onChange={this.updateInput.bind(this, 'name')} value={this.state.name} required />
                        </div>

                        <div className="col-12 col-md-12 col-lg-6  form-group">
                            <label> Data de nascimento </label>
                            <InputMask className='form-control' id="birthDate" mask="99/99/9999"
                                maskChar={null} value={this.state.birthDate} placeholder="DD/MM/AAAA"
                                onChange={this.updateInput.bind(this, 'birthDate')} required />
                        </div>

                        <div className="col-md-5 col-5 col-lg-3 form-group custom-control custom-radio d-flex align-items-center padding_left_4">
                            <Input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" required defaultChecked/>
                            <label className="custom-control-label" htmlFor="customRadio1">Masculino</label>
                        </div>

                        <div className="col-md-5 col-5 col-lg-3 form-group custom-control custom-radio d-flex align-items-center">
                            <Input type="radio" id="customRadio2" name="customRadio"
                                className="custom-control-input" required />
                            <label className="custom-control-label" htmlFor="customRadio2">Feminino</label>
                        </div>

                        <div className="col-md-12 col-12 form-group">
                            <label>Cpf</label>
                            <InputMask className="form-control" id="cpf" name="cpf"
                                placeholder="000-000-000.00" label="Cpf" mask="999-999-999.99"
                                onChange={this.updateInput.bind(this, 'cpf')} value={this.state.cpf} label="Cpf" required />
                        </div>

                        <div className="col-md-6 col-12 form-group">
                            <label>Telefone celular</label>
                            <InputMask className='form-control' id='phone' mask="(99) 99999-9999"
                                name='phone' placeholder='(00) 00000-0000' label='Telefone celular'
                                onChange={this.updateInput.bind(this, 'phone')} value={this.state.phone} required />
                        </div>

                        <div className="col-md-6 col-12 form-group">
                            <label>Telefone residêncial</label>
                            <InputMask className="form-control" id="residentialPhone" mask="(99) 9999-9999"
                                name="residentialPhone" placeholder="(00)000-0000" label="Telefone residêncial"
                                onChange={this.updateInput.bind(this, 'residentialPhone')} value={this.state.residentialPhone} required />
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-12">
                    <div className="row">

                        <div className="col-12 form-group">
                            <Input type='email' className='form-control' id='email'
                                name='email' placeholder='exemplo@exemplo.com' label='e-mail'
                                onChange={this.updateInput.bind(this, 'email')} value={this.state.email} required />
                        </div>

                        <div className="col-md-12 col-12 form-group">
                            <Input type='password' className='form-control' id='password'
                                name='password' onChange={this.updateInput.bind(this, 'password')} label='Senha'
                                value={this.state.password} required />
                        </div>

                        <div className="col-md-12 col-12 form-group">
                            <Input type='password' className='form-control' id='password' label='Confirme a senha'
                                name='passwordRepeat' onChange={this.updateInput.bind(this, 'passwordRepeat')}
                                value={this.state.passwordRepeat} required />
                        </div>
                    </div>
                </div>

                <div className="custom-control custom-checkbox padding_left_4">
                    <Input type="checkbox" id="cheboxTermsContracts" name="custonCheckBox"
                        className="custom-control-input" required />
                    <label className="custom-control-label" htmlFor="cheboxTermsContracts">
                        <small> LI, COMPREENDI E CONCORDO COM AS CONDIÇÕES GERAIS, INCLUSIVE COM RELAÇÃO À
								PROTEÇÃO DE DADOS PESSOAIS, FINALIDADES E HIPÓTESES DE TRATAMENTO DE DADOS.</small></label>
                </div>
                <div className="col-md-3">
                    <Button type="submit" value="submit" className="genric-btn success text-uppercase mt-2" text="Finalizar Cadastro" />
                </div>
            </form>
        );
    }
}