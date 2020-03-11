import {
  DELIVERY_ADDRESS,
  NOT_EXIST_ADDRESS,
  CHANGE_ADDRESS
} from '../../constants/checkout.constants'
import { saveLocalStorage, searchLocalStorage } from '../../../../utils/localstorage'

const delivery = (addressDelivery) => {
  return {
    type: DELIVERY_ADDRESS,
    addressDelivery,
  }
}

const searchAddress = () => {
  return {
    type: NOT_EXIST_ADDRESS
  }
}

const updatingAddress = (address) => {
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
      dispatch(searchAddress())
    } else {
      const addressLocalStorage = JSON.parse(address)
      dispatch(delivery(...addressLocalStorage))
    }
  }
}

/** Função usada para o usuario cadastrar um novo endereço **/
export const deliveryAddres = (address) => {
  //salvar as informações do usuario no localstorage
  saveLocalStorage("address", JSON.stringify([address]))
  return (dispatch) => {
    dispatch(delivery(address))
  }
}

/** Função para recuperar os dados do cliente, e trocar de endereço **/
export const changeAddress = () => {
  const addresLocalStorage = searchLocalStorage('address')
  const convertAddress = JSON.parse(addresLocalStorage)
  return dispatch => {
    dispatch(updatingAddress(convertAddress))
  }
} 