import reducer from '../../reducer/checkout.reducer'
import * as type from '../../constants/checkout.constants'
const initState = {
  notExisitAddress: null,
  existAddress: null,
  addressDelivery: [],
  loadingAddress: []
}

const response = {
  email: "jonas_barros@outlook.com",
  address: "Minha Casa",
  toReceiver: "Jonas Florencio de barros",
  cep: "04.851-410",
  typeAddress: "",
  street: "Rua Andorinhas brasileiras",
  number: "61",
  complement: "Bloco B",
  burgh: "Lago Azul",
  states: "20",
  city: "São Paulo",
  reference: "Igreja Católica",
  phone: "(11) 9843-08992",
}

describe("testes do reducer", () => {
  it("Teste do state inicial", () => {
    expect(reducer(undefined, {})).toEqual(initState)
  })

  it("Carrega o endereço do usuário, se estiver salvo no localStorage", () => {
    const loadingAddress = reducer(initState, {
      type: type.LOADING_ADDRESS,
      response: response
    })
    expect(loadingAddress).toEqual({
      notExisitAddress: null,
      existAddress: true,
      addressDelivery: [],
      loadingAddress: [response]
    })
  })

  it("Retorna false se o endereço do usuario não existir no localStorage", () => {
    expect(reducer([], {
      type: type.NOT_EXIST_ADDRESS,
      existAddress: false
    })
    ).toEqual({
      existAddress: false
    })
  })
})

