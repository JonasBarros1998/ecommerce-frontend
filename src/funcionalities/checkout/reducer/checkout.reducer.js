import {
  NOT_EXIST_ADDRESS,
  CHANGE_ADDRESS,
  LOADING_ADDRESS,
  LISTING_ALL_PRODUCTS
} from '../constants/checkout.constants'

const state = {
  listingAllProduct: [],
  notExisitAddress: null,
  existAddress: null,
  addressDelivery: [],
  loadingAddress: []
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
      console.log(action.address)
      return Object.assign({}, initState, {
        loadingAddress: action.address
      })

      //Adicionar para store a lista de todos os produtos do carrinho
      case LISTING_ALL_PRODUCTS:
        return Object.assign({}, initState, {
          listingAllProduct: [...action.products]
        })

    default:
      return state
  }
}
export default checkout
