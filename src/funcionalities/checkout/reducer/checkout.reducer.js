import {
    NOT_EXIST_ADDRESS,
    EXIST_ADDRESS,
    CHANGE_ADDRESS,
    LOADING_ADDRESS
} from '../constants/checkout.constants'

const state = {
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
        case EXIST_ADDRESS:
            return Object.assign({}, initState, {
                existAddress: true,
                addressDelivery: action.response
            })

        case CHANGE_ADDRESS:
            console.log(action.address)
            return Object.assign({}, initState, {
                loadingAddress: action.address
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