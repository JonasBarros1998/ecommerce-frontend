import { verb } from '../../../utils/http/verbs'
import { HttpHeaders as header } from '../../../utils/header/headers'
import { configClient } from '../service/configClient'
import { route } from '../routes/initialize.route'

const clientId = localStorage.getItem('client_id')
const clientCreate = route.client['create']
const initializeObj = configClient()

export const configCient = () => {
    if (clientId == undefined) {
        verb.post("clientCreate",
            header.defaultHeaders(),
            initializeObj)
            .then(response => {
                return response
            })
            .catch(error => new Error(error))
    }
}