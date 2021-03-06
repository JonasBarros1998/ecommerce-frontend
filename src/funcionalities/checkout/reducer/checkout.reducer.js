import {
  NOT_EXIST_ADDRESS,
  CHANGE_ADDRESS,
  LOADING_ADDRESS,
  LISTING_ALL_PRODUCTS,
  DELIVERY_VALUE,
  CONFIRMATION,
} from '../constants/checkout.constants'

const state = {
  listingAllProduct: [],
  notExisitAddress: null,
  existAddress: null,
  addressDelivery: [],
  loadingAddress: [],
  valueDelivery: 0,
  client: []
}

export const checkout = (initState = state, action) => {
  switch (action.type) {
    case LOADING_ADDRESS:
      return Object.assign({}, initState, {
        existAddress: true,
        loadingAddress: [action.response]
      })
    case NOT_EXIST_ADDRESS:
      return Object.assign({}, initState, {
        existAddress: false
      })

    case CHANGE_ADDRESS:
      return Object.assign({}, initState, {
        loadingAddress: action.address
      })

    //Adicionar para store a lista de todos os produtos do carrinho
    case LISTING_ALL_PRODUCTS:
      return Object.assign({}, initState, {
        listingAllProduct: [...action.products]
      })

    //valor do frete
    case DELIVERY_VALUE:
      return Object.assign({}, initState, {
        valueDelivery: action.value
      })

    case CONFIRMATION:
      return Object.assign({}, initState, {
        client: action.datas
      })
    default:
      return state
  }
}
export default checkout
