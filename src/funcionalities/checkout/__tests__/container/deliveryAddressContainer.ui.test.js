/**
 * Teste de UI(user interface) do componente de formulario de 
 * cadastro de endereço
 */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { DeliveryAddressContainer } from '../../containers/deliveryAddress/deliveryAddressContainer'

Enzyme.configure({ adapter: new Adapter() })

const address = [{
    email: "jonas_barros@outlook.com",
    address: "Minha casa",
    toReceiver: "Jonas Florencio de Barros",
    cep: "04851410",
    typeAddress: "Avenida",
    street: "Rua andorinhas brasileiras",
    number: "61",
    complement: "Casa",
    burgh: "Lago azul",
    states: "São Paulo",
    city: "Sp",
    reference: "Frente a igreja católica",
    phone: "11984308992"
}]

const setup = () => {
    const props = {
        addTodo: jest.fn()
    }
    const deliveryAddressContainer = shallow(<DeliveryAddressContainer nameFields={address} />)

    return {
        props,
        deliveryAddressContainer
    }
}

describe('Component de cadastro de endereço de entrega de produtos', () => {
    const { deliveryAddressContainer } = setup()
     it("Teste de snaptshot do componente de endereço", () => {
         expect(deliveryAddressContainer.html()).toMatchSnapshot();
     });

    it("Campo de e-mail", () => {
        expect(deliveryAddressContainer.find('input[name="email"]').props()).toEqual({
            className: 'form-control', id: "registerEmail", name: "email", type: "email",
            onChange: expect.any(Function),
            placeholder: "exemplo@exemplo.com",
            value: "jonas_barros@outlook.com"
        })
    })

    it("campo de nome do endereço", () => {
        expect(deliveryAddressContainer.find('input[name="nameAddress"]').props()).toEqual({
            className: 'form-control', id: "nameAddress", name: "nameAddress", type: "text",
            onChange: expect.any(Function),
            placeholder: "Ex: Minha casa, Meu trabalho",
            value: "Minha casa",
        })
    })

    it("campo de nome do destinatario", () => {
        expect(deliveryAddressContainer.find('input[name="nameRecipient"]').props()).toEqual({
            className: "form-control", id: "nameRecipient", name: "nameRecipient", type: "text",
            onChange: expect.any(Function),
            placeholder: "Nome de quem vai receber a encomenda",
            value: "Jonas Florencio de Barros"
        })
    })

    it("campo de nome do destinatario", () => {
        expect(deliveryAddressContainer.find('#cep').props()).toEqual({
            className: "form-control", id: "cep", name: "cep", type: "text",
            required: true,
            mask: "99.999-999",
            onChange: expect.any(Function),
            placeholder: "00.000-000",
            value: "04851410"
        })
    })

    it("campo de tipo de endereco", () => {
        expect(deliveryAddressContainer.find('#typeAddress').props()).toEqual({
            class: "custom-select mr-sm-2 form-control select-delivery",
            id: "typeAddress",
            select: expect.any(Function)
        })
    })

    it("campo de cep", () => {
        expect(deliveryAddressContainer.find('input[name="nameStreet"]').props()).toEqual({
            className: "form-control", id: "nameStreet", name: "nameStreet", type: "text",
            required: true,
            onChange: expect.any(Function),
            placeholder: "Nome da rua",
            value: "Rua andorinhas brasileiras"
        })
    })

    it("campo de numero da residencia", () => {
        expect(deliveryAddressContainer.find('input[name="number"]').props()).toEqual({
            className: "form-control", id: "number", name: "number", type: "text",
            required: true,
            onChange: expect.any(Function),
            placeholder: "Número da residência",
            value: "61"
        })
    })

    it("campo de complemento", () => {
        expect(deliveryAddressContainer.find('input[name="complement"]').props()).toEqual({
            className: "form-control", id: "complement", name: "complement", type: "text",
            onChange: expect.any(Function),
            placeholder: "*Ex: Apartamento 51 5 andar, bloco B",
            value: "Casa"
        })
    })

    it("campo de complemento", () => {
        expect(deliveryAddressContainer.find('input[name="burgh"]').props()).toEqual({
            className: "form-control", id: "burgh", name: "burgh", type: "text",
            required: true,
            onChange: expect.any(Function),
            placeholder: "Nome do bairro de entrega",
            value: "Lago azul"
        })
    })

    it("campo de estados", () => {
        expect(deliveryAddressContainer.find('#states').props()).toEqual({
            class: "custom-select mr-sm-2 form-control select-delivery",
            id: "states",
            select: expect.any(Function)
        })
    })

    it("campo de ponto de referencia", () => {
        expect(deliveryAddressContainer.find('input[name="referencePoint"]').props()).toEqual({
            className: "form-control", id: "referencePoint", name: "referencePoint", type: "text",
            required: true,
            onChange: expect.any(Function),
            value: "Frente a igreja católica"
        })
    })

    it("campo de telefone", () => {
        expect(deliveryAddressContainer.find('#residentialPhone').props()).toEqual({
            className: "form-control", id: "residentialPhone", name: "residentialPhone", type: "text",
            mask: "(99) 9999-99999",
            required: true,
            onChange: expect.any(Function),
            placeholder: "(00) 0000-00000",
            value: "11984308992"
        })
    })

})


