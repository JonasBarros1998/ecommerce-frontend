import reducer from '../../reducer/checkout.reducer'
import * as type from '../../constants/checkout.constants'

describe("testes do reducer", () => {
    it("Teste do state inicial", () => {
        expect(reducer(undefined, {})).toEqual({
            notExisitAddress: null,
            existAddress: null,
            addressDelivery: [],
            loadingAddress: []
        })
    })

    it("Carrega o endereço do usuário, se estiver salvo no localStorage", () => {
        expect(reducer([], {
            
        }))
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


/*
import reducer from '../../structuring-reducers/todos'
import * as types from '../../constants/ActionTypes'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests'
        }
      )
    ).toEqual([
      {
        text: 'Run the tests',
        completed: false,
        id: 1
      },
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })
})*/