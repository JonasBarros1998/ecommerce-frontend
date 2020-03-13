/**
 * Arquivo para testes de actions creatores e async actions creators
 */
import {
    notExistAddress,
    loadingAddress,
    updatingAddress
} from '../../actions/deliveryAddress/delivaryAddres.action'

import {
    CHANGE_ADDRESS,
    DELIVERY_ADDRESS,
    NOT_EXIST_ADDRESS,
    LOADING_ADDRESS
} from '../../constants/checkout.constants'

const response = [{
    "email": "jonas_barros@outlook.com",
    "address": "Minha Casa",
    "toReceiver": "Jonas Florencio de barros",
    "cep": "04.851-410",
    "typeAddress": "Rua",
    "street": "Rua Andorinhas brasileiras",
    "number": "61",
    "burgh": "Lago Azul",
    "states": "Alagoas",
    "city": "São Paulo",
    "reference": "Igreja Católica",
    "phone": "(11) 9843-08992"
}]

describe('actions', () => {
    it("Se não existir nenhum endereço cadastrado pelo cliente (searchAddress)", () => {
        const expectSearchAddress = {
            type: NOT_EXIST_ADDRESS
        }
        expect(notExistAddress()).toEqual(expectSearchAddress)
    })

    it("Cadastrar um novo endereço (delivery)", () => {
        const expectLoadingAddress = {
            type: LOADING_ADDRESS,
            response
        }
        expect(loadingAddress(response)).toEqual(expectLoadingAddress)
    })

    it("atualizar um endereço já existente", () => {
        const address = response
        const expectUpdatingAddress = {
            type: CHANGE_ADDRESS,
            address
        }
        expect(updatingAddress(address)).toEqual(expectUpdatingAddress)
    })
})

