/**
 * Modulo para formatar o objeto, que vem do container, 
 * e enviar da forma que a API nos permite
 */
import { convertDate } from '../../../utils/dates/date'

export const objectFormatting = (datas) => {
    delete datas.repeatPassword

   const newObject = Object.assign({}, datas, {
        
        birthDate: convertDate(datas.birthDate),
        user: {
            email: datas.email,
            password: datas.password
        }
    })

   return newObject
}