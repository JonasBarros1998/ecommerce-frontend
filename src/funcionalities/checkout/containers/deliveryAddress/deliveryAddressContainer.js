/**
 * Componente que tem como funcionalidade renderizar 
 * o formulario para cadastro do endereço do cliente. 
 */
import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputMask from 'react-input-mask'
import SelectAddressComponent from '../../../../components/select/selectAddressComponent'
import SelectComponent from '../../../../components/select/selectComponent'
import { deliveryAddres } from '../../actions/deliveryAddress/delivaryAddres.action'

const DeliveryAddressContainer = props => {

    const [form, setForm] = useState({
        email: "",
        address: "",
        toReceiver: "",
        cep: "",
        street: "",
        number: "",
        complement: "",
        burgh: "",
        city: "",
        reference: "",
        phone: ""
    })

    const updateSelect = (event) => {
        const valueSelect = event.target.value
        const selectId = event.target.id
        const textLabel = document.querySelectorAll(`#${selectId}`)[0].options[valueSelect].label
        
        /*
        setForm({
            [ states ]: "Zé"
        })
        console.log(form)*/
    }

    const upadateInput = (event) => {
        return setForm({
            ...form,
            [ event.target.name ]: event.target.value
        })
    }

    const { email, address, toReceiver,
        cep, street, number,
        complement, burgh,
        city, reference, phone } = form
    return (
        <>
            <form className="row contact_form" method="post"
                onSubmit={(e) => {
                    e.preventDefault();
                    props.deliveryAddres({
                        address: email.value
                    })
                }}>

                <div className="row ml-2">
                    <div className="col-md-12 form-group">
                        <label><small>e-mail</small></label>
                        <input type='email' className='form-control' id='registerEmail'
                            name='email' placeholder='exemplo@exemplo.com'
                            value={email}
                            onChange={e => upadateInput(e)} />
                    </div>

                    <div className="col-md-12 form-group">
                        <label> <small>Nome do endereço</small></label>
                        <input type='text' className='form-control'
                            id='nameAddress' name='address'
                            placeholder="Ex: Minha casa, Meu trabalho"
                            value={address}
                            onChange={e => upadateInput(e)} />
                    </div>

                    <div className="col-md-12 form-group">
                        <label><small>Nome do destinatário</small></label>
                        <input className='form-control' id="nameRecipiente"
                            name="toReceiver"
                            value={toReceiver}
                            onChange={e => upadateInput(e)} />
                    </div>

                    <div className="col-md-3 form-group">
                        <label><small>Cep</small></label>
                        <InputMask className="form-control" id="cep" name="cep"
                            placeholder="00.000-000" mask="99.999-999"
                            value={cep}
                            onChange={e => upadateInput(e)}
                            required />
                    </div>

                    <div className="col-md-3 align-items-center">
                        <label>
                            <small>Tipo de endereço</small>
                        </label>
                        <SelectAddressComponent />
                    </div>

                    <div className="col-md-6 form-group">
                        <label> <small>Nome da rua</small></label>
                        <input type='text' className='form-control ' id='nameStreet'
                            name='street'
                            placeholder="Nome da rua"
                            value={street}
                            onChange={e => upadateInput(e)} required />
                    </div>

                    <div className="col-md-2 form-group">
                        <label><small>Número</small></label>
                        <input className="form-control" id="number" placeholder="Número"
                            name="number"
                            value={number}
                            onChange={e => upadateInput(e)} required />
                    </div>

                    <div className="col-md-6 form-group">
                        <label><small>Complemento</small></label>
                        <input className="form-control" id="complement" placeholder="*Ex: Apartamento 51 5 andar, bloco B"
                            name="complement"
                            value={complement}
                            onChange={e => upadateInput(e)} />
                    </div>

                    <div className="col-md-4 form-group">
                        <label><small>Bairro</small></label>
                        <input className="form-control" id="burgh" name="burgh"
                            value={burgh}
                            onChange={e => upadateInput(e)}
                            required />
                    </div>

                    <div className="col-md-4 form-group">
                        <label>
                            <small>Estado</small>
                        </label>
                        <SelectComponent
                            select={e => updateSelect(e)} />
                    </div>

                    <div className="col-md-4 form-group">
                        <label><small>Cidade</small></label>
                        <input className="form-control" id="city" name="city"
                            value={city}
                            onChange={e => upadateInput(e)} />
                    </div>

                    <div className="col-md-4 form-group">
                        <label><small>Ponto de referência</small></label>
                        <input className="form-control" id="referencePoint"
                            name="reference"
                            value={reference}
                            onChange={e => upadateInput(e)}
                        />
                    </div>

                    <div className="col-md-12 form-group">
                        <label><small>Telefone</small></label>
                        <InputMask className="form-control" id="residentialPhone"
                            mask="(99) 9999-99999" name="phone"
                            placeholder="(00) 0000-00000"
                            value={phone}
                            onChange={e => upadateInput(e)} />
                    </div>

                    <div className="col-md-12">
                        <div className="d-flex justify-content-end">
                            <button type="submit" value="submit" className="genric-btn success mt-2">Prosseguir</button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ deliveryAddres }, dispatch)
export default connect(null, mapDispatchToProps)(DeliveryAddressContainer)