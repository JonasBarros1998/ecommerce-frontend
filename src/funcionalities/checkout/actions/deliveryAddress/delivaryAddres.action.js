import { verb } from '../../../../utils/http/verbs'
import { HttpHeaders as header } from '../../../../utils/header/headers'
import {
  DELIVERY_ADDRESS, 
  NOT_EXIST_ADDRESS,
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

/**Função para verificar se existe algum endereço no localstorage**/
export const verifieldLocalStorage = () => {
  const address = searchLocalStorage('address')
  return (dispatch) => {
    if(address == null){
      dispatch(searchAddress())
    }else{
      const addressLocalStorage = JSON.parse(address)
      dispatch(delivery(...addressLocalStorage))
    }
  }
}

/* Função usada para o usuario cadastrar um novo endereço, 
ou alterar um existente */
const listAddress = []
export const deliveryAddres = (address) => {
  listAddress.push(address)
  //salvar as informações do usuario no localstorage
  saveLocalStorage("address", JSON.stringify(listAddress))

  return (dispatch) => {
    dispatch(delivery(address))
  }
}
