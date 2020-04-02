/**
 * Componente que tem como funcionalidade renderizar 
 * o formulario para cadastro e edição do endereço do cliente. 
 */
import React, { useState } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import InputMask from 'react-input-mask'
import $ from 'jquery'
import SelectComponent from '../../../../components/select/selectComponent'
import { deliveryAddres } from '../../actions/deliveryAddress/delivaryAddres.action'

export const DeliveryAddressContainer = props => {

    const { nameFields } = props

    const [changeAddress] = useState(...nameFields)
    const [textContentSelect, setTextContentSelect] = useState("")

    const [form, setForm] = useState({
        email: changeAddress.email,
        address: changeAddress.address,
        toReceiver: changeAddress.toReceiver,
        cpf: changeAddress.cpf,
        cep: changeAddress.cep,
        typeAddress: changeAddress.typeAddress,
        street: changeAddress.street,
        number: changeAddress.number,
        complement: changeAddress.complement,
        burgh: changeAddress.burgh,
        states: changeAddress.states,
        city: changeAddress.city,
        reference: changeAddress.reference,
        phone: changeAddress.phone,
    })

    //Atualizar o state do select
    const updateSelect = (event) => {
        const valueSelect = event.target.value
        const selectId = event.target.id
        const select = document.querySelector(`#${selectId}`)
        const selectTextContent = select[event.target.value].textContent
        setTextContentSelect(selectTextContent)
        return setForm({
            ...form,
            [selectId]: valueSelect
        })
    }
    //Atualizar o state dos inputs
    const upadateInput = (event) => {
        return setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const { email, address, toReceiver,
        cpf, cep, typeAddress, street, number,
        complement, burgh, states,
        city, reference, phone } = form

    return (
        <>
            <form className="row contact_form" method="post"
                onSubmit={(e) => {
                    e.preventDefault();
                    props.deliveryAddres({
                        email: email, address: address, toReceiver: toReceiver, cpf: cpf,
                        cep: cep, typeAddress: typeAddress, street: street, number: number,
                        complement: complement, burgh: burgh, 
                        states: {stateValue: states, nameState: textContentSelect}, city: city,
                        reference: reference, phone: phone
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

                    <div className="col-md-9 form-group">
                        <label><small>Nome do destinatário</small></label>
                        <input type="text" className='form-control' id="nameRecipient"
                            name="toReceiver" placeholder='Nome de quem vai receber a encomenda'
                            value={toReceiver}
                            onChange={e => upadateInput(e)} />
                    </div>

                    <div className="col-md-3 form-group">
                        <label><small>Cpf</small></label>
                        <InputMask type="text" className="form-control" id="cpf"
                            name="cpf" placeholder="000.000.000.00" mask="999.999.999-99"
                            value={cpf}
                            onChange={e => upadateInput(e)}
                            required />
                    </div>

                    <div className="col-md-3 form-group">
                        <label><small>Cep</small></label>
                        <InputMask type="text" className="form-control" id="cep"
                            name="cep" placeholder="00.000-000" mask="99.999-999"
                            value={cep}
                            onChange={e => upadateInput(e)}
                            required />
                    </div>

                    <div className="col-md-9 form-group">
                        <label> <small>Nome da rua</small></label>
                        <input type='text' className='form-control' id='nameStreet'
                            name='street' placeholder="Nome da rua"
                            value={street}
                            onChange={e => upadateInput(e)} required />
                    </div>

                    <div className="col-md-2 form-group">
                        <label><small>Número</small></label>
                        <input type="text" className="form-control" id="number"
                            name="number" placeholder="Número da residência"
                            value={number}
                            onChange={e => upadateInput(e)} required />
                    </div>

                    <div className="col-md-6 form-group">
                        <label><small>Complemento</small></label>
                        <input type="text" className="form-control" id="complement"
                            name="complement" placeholder="*Ex: Apartamento 51 5 andar, bloco B"
                            value={complement}
                            onChange={e => upadateInput(e)} />
                    </div>

                    <div className="col-md-4 form-group">
                        <label><small>Bairro</small></label>
                        <input type="text" className="form-control" id="burgh" name="burgh"
                            value={burgh} placeholder="Nome do bairro de entrega"
                            onChange={e => upadateInput(e)}
                            required />
                    </div>

                    <div className="col-md-4 form-group">
                        <label><small>Cidade</small></label>
                        <input className="form-control" id="city" name="city"
                            value={city}
                            onChange={e => upadateInput(e)} />
                    </div>

                    <div className="col-md-4 form-group">
                        <label>
                            <small>Estado</small>
                        </label>
                        <SelectComponent id={"states"}
                            class={"custom-select mr-sm-2 form-control select-delivery"}
                            select={e => updateSelect(e)}
                            value={states.stateValue} />
                    </div>

                    <div className="col-md-4 form-group">
                        <label><small>Ponto de referência</small></label>
                        <input type="text" className="form-control" id="referencePoint"
                            name="reference"
                            value={reference}
                            onChange={e => upadateInput(e)}
                            required />
                    </div>

                    <div className="col-md-12 form-group">
                        <label><small>Telefone</small></label>
                        <InputMask type="text" className="form-control" id="residentialPhone"
                            mask="(99) 9999-99999" name="phone"
                            placeholder="(00) 0000-00000"
                            value={phone}
                            onChange={e => upadateInput(e)}
                            required />
                    </div>

                    <div className="col-md-12">
                        <div className="d-flex justify-content-end">
                            <button type="submit"
                                value="submit"
                                className="genric-btn success mt-2"
                                onClick={() => $(`#${props.id}`).modal('hide')}>Salvar</button>
                        </div>
                    </div>

                </div>
            </form>
        </>
    )
}

const mapStateToProps = (store) => ({ loadingAddress: store.checkout.loadingAddress })
const mapDispatchToProps = (dispatch) => bindActionCreators({ deliveryAddres }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(DeliveryAddressContainer)