import React, { useState } from 'react'
import { connect } from 'react-redux'
import { registerNewUser } from '../actions/register.action'
import { bindActionCreators } from 'redux'
import InputMask from 'react-input-mask'

const RegisterUserContainer = props => {

    const { messageCountPassword, 
                messageLevelPassword, 
                messageComparationPassword, 
                registerNewUser } = props

    const [name, setName] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [male, setMale] = useState("")
    const [feminine, setFeminine] = useState("")
    const [cpf, setCpf] = useState("")
    const [smartPhone, setSmartPhone] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatPassword, setRepeatPassword] = useState("")

    return (

        < form className="row contact_form" method="post"
            onSubmit={(e) => {
                e.preventDefault();
                registerNewUser({
                    fullName: name.value, birthDate: birthDate.value,
                    male: male.checked, feminine: feminine.checked, cpf: cpf.value,
                    smartphone: smartPhone.value, phone: phone.value,
                    email: email.value, password: password.value, repeatPassword: repeatPassword.value
                })
            }}>

            <div className="col-sm-6 col-12">
                <div className="row">

                    <div className="col-md-12 form-group">
                        <label> Nome completo </label>
                        <input type='text' className='form-control ' id='name' name='name' label="Nome"
                            ref={(stateName) => setName(name => name = stateName)}  />
                    </div>
                    <div className="col-12 col-md-12 col-lg-6  form-group">
                        <label> Data de nascimento </label>
                        <InputMask className='form-control' id="birthDate" mask="99/99/9999"
                            maskChar={null} placeholder="DD/MM/AAAA"
                            ref={(stateBirthDate) => setBirthDate(birthDate => birthDate = stateBirthDate)}
                              />
                    </div>

                    <div className="col-md-5 col-5 col-lg-3 form-group custom-control custom-radio d-flex align-items-center padding_left_4">
                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"
                            ref={(stateMale) => setMale(male => male = stateMale)}
                            defaultChecked />
                        <label className="custom-control-label" htmlFor="customRadio1">Masculino</label>
                    </div>

                    <div className="col-md-5 col-5 col-lg-3 form-group custom-control custom-radio d-flex align-items-center">
                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"
                            ref={(stateFeminine) => setFeminine(feminine => feminine = stateFeminine)} />
                        <label className="custom-control-label" htmlFor="customRadio2">Feminino</label>
                    </div>

                    <div className="col-md-12 col-12 form-group">
                        <label>Cpf</label>
                        <InputMask className="form-control" id="cpf" name="cpf"
                            placeholder="000-000-000.00" label="Cpf" mask="999-999-999.99"
                            ref={(stateCpf) => setCpf(cpf => cpf = stateCpf)} />
                    </div>

                    <div className="col-md-6 col-12 form-group">
                        <label>Telefone celular</label>
                        <InputMask className='form-control' id='phone' mask="(99) 99999-9999"
                            name='phone' placeholder='(00) 00000-0000' label='Telefone celular'
                            ref={(stateSmartPhone) => setSmartPhone(smartPhone => smartPhone = stateSmartPhone)} />
                    </div>

                    <div className="col-md-6 col-12 form-group">
                        <label>Telefone residêncial</label>
                        <InputMask className="form-control" id="residentialPhone" mask="(99) 9999-9999"
                            name="residentialPhone" placeholder="(00)000-0000" label="Telefone residêncial"
                            ref={(statePhone) => setPhone(phone => phone = statePhone)} />
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-12">
                <div className="row">

                    <div className="col-12 form-group">
                        <label>e-mail</label>
                        <input type='email' className='form-control' id='email'
                            name='email' placeholder='exemplo@exemplo.com' label='e-mail' 
                            ref={(stateEmail) => setEmail(email => email = stateEmail)} />
                    </div>

                    <div className="col-md-12 col-12 form-group">
                        <label>Senha</label>
                        <input type='password' className='form-control password' id='password'
                            name='password' label='Senha'
                            ref={(statePassword) => setPassword(password => password = statePassword)} required/>
                    </div>

                    <div className="col-md-12 col-12 form-group">
                        <label>Confirmar senha</label>
                        <input type='password' className='form-control' id='password'
                            label='Confirme a senha' name='passwordRepeat'
                            ref={(stateRepeatPass) => setRepeatPassword(repeatPassword => repeatPassword = stateRepeatPass)}/>

                        <div className="col-md-6">
                            <p className="badge badge-pill badge-danger">{messageComparationPassword}</p>
                        </div>

                        <div className="col-md-10">
                            <p className="badge badge-pill badge-warning">{messageLevelPassword}</p>
                        </div>

                        <div className="col-md-10">
                            <p className="badge badge-pill badge-warning">{messageCountPassword}</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="custom-control custom-checkbox padding_left_4">
                <input type="checkbox" id="cheboxTermsContracts" name="custonCheckBox"
                    className="custom-control-input" />
                <label className="custom-control-label" htmlFor="cheboxTermsContracts">
                    <small> LI, COMPREENDI E CONCORDO COM AS CONDIÇÕES GERAIS, INCLUSIVE COM RELAÇÃO À
                    PROTEÇÃO DE DADOS PESSOAIS, FINALIDADES E HIPÓTESES DE TRATAMENTO DE DADOS.</small></label>
            </div>
            <div className="col-md-3">
                <button type="submit" value="submit" className="genric-btn success text-uppercase mt-2">Prosseguir</button>
            </div>
        </form >
    )
}

const mapStateToProps = store => {
    return {
        messageComparationPassword: store.registerUser.messageComparationPassword,
        messageLevelPassword: store.registerUser.messageLevelPassword,
        messageCountPassword: store.registerUser.messageCountPassword
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({ registerNewUser }, dispatch))
export default connect(mapStateToProps, mapDispatchToProps)(RegisterUserContainer)