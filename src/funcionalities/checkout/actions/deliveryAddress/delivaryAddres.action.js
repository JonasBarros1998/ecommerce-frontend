import {
  NOT_EXIST_ADDRESS,
  CHANGE_ADDRESS,
  LOADING_ADDRESS
} from '../../constants/checkout.constants'

import { saveLocalStorage, searchLocalStorage } from '../../../../utils/localstorage'

export const loadingAddress = (response) => {
  return {
    type: LOADING_ADDRESS,
    response,
  }
}

export const notExistAddress = () => {
  return {
    type: NOT_EXIST_ADDRESS
  }
}

export const updatingAddress = (address) => {
  return {
    type: CHANGE_ADDRESS,
    address
  }
}

/**Função para verificar se existe algum endereço no localstorage. 
 * Se existir carregamos o endereço do usuario.
 * Caso não existir, renderizamos um botão de adicionar endereço. **/
export const verifieldLocalStorage = () => {
  const address = searchLocalStorage('address')
  return (dispatch) => {
    if (address == null) {
      dispatch(notExistAddress())
    } else {
      const addressLocalStorage = JSON.parse(address)
      dispatch(loadingAddress(...addressLocalStorage))
    }
  }
}

/** Função usada para o usuario cadastrar um novo endereço **/
export const deliveryAddres = (address) => {
  //salvar as informações do usuario no localstorage
  saveLocalStorage("address", JSON.stringify([address]))
  return (dispatch) => {
    dispatch(loadingAddress(address))
  }
}

/** Função usada para atualizar o endereço do cliente. 
 * ela vai recuperar o endereço, carregar seus dados nos campo de endereço  **/
export const changeAddress = () => {
  const addresLocalStorage = searchLocalStorage('address')
  const convertAddress = JSON.parse(addresLocalStorage)
  return dispatch => {
    dispatch(updatingAddress(convertAddress))
  }
} 