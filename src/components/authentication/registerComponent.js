import React, { Component, Fragment } from 'react'
import Input from '../forms/inputComponent.js'

export default class RegisterComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            dataNascimento: '',
            cpf: '',
            homePhone: '',
            smartPhone: '',
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
            <form className="row contact_form" method="post" id="contactForm">
                
                <Input type='text' className='form-control' id='name'
                    name='name' placeholder='nome completo' label="Nome"
                    onChange={this.updateInput.bind(this, 'name')} value={this.state.name} />

                <Input type='date' className='form-control' id='date'
                    name='date' placeholder='Data de nascimento' label='Data de nascimento'
                    onChange={this.updateInput.bind(this, 'date')} value={this.state.dataNascimento} />

                <Input type='number' className='form-control' id='cpf'
                    name='cpf' placeholder='000.000.000-00' label = "cpf"
                    onChange={this.updateInput.bind(this, 'cpf')} value={this.state.cpf} />

                <Input type='number' className='form-control' id='homePhone'
                    name='homePhone' placeholder='(00) 0000-0000' label='Telefone residencial'
                    onChange={this.updateInput.bind(this, 'homePhone')} value={this.state.homePhone} />

                <Input type='number' className='form-control' id='smartPhone'
                    name='smartPhone' placeholder='(00) 00000-0000' label='Telefone celular'
                    onChange={this.updateInput.bind(this, 'smartPhone')} value={this.state.smartPhone} />

                <Input type='email' className='form-control' id='email'
                    name='email' placeholder='exemplo@exemplo.com' label='e-mail'
                    onChange={this.updateInput.bind(this, 'email')} value={this.state.email} />

                <Input type='password' className='form-control' id='password'
                    name='password' onChange={this.updateInput.bind(this, 'password')} label='Senha'
                    value={this.state.password} />
                
                <Input type='password' className='form-control' id='password' label='Confirme a senha'
                    name='passwordRepeat'onChange={this.updateInput.bind(this, 'passwordRepeat')} 
                    value={this.state.passwordRepeat} />
            </form>
        );
    }
}