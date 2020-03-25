import { verb } from '../../../utils/http/verbs'
import { HttpHeaders as header } from '../../../utils/header/headers'
import { configClient } from '../service/configClient'
import { route } from '../routes/initialize.route'



const clientId = localStorage.getItem('client_id')
const createCliente = route.client['create']
export const configCient = () => {
    if (clientId == undefined) {
        const initializeObj = configClient()
        console.log(initializeObj)
        verb.post("createCliente",
            header.defaultHeaders(),
            initializeObj)
            .then(response => {
                return response
            })
            .catch(error => new Error(error))
    }

}