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

      //Adicioanr ao states a lista de todos os produtos do carrinho
      case LISTING_ALL_PRODUCTS:
        return Object.assign({}, initState, {
          listingAllProduct: [...action.products]
        })

    default:
      return state
  }
}
export default checkout

/*
import { ADD_TODO } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]

    default:
      return state
  }
}*/