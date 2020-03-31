import { verb } from '../../../utils/http/verbs'
import { route } from '../routes/initialize.route'
import { HttpHeaders as header } from '../../../utils/header/headers'
import { configClient } from '../service/configClient'

//Função para configuração inicial do cliente, que acessa o sistema
const initializeObj = configClient()
const createClient = route.client['create']
export const client = () => {

    /**
     * Se initializeObj for igual a null, quer dizer que já temos um id 
     * atribuido ao cliente. 
     * 
     * Se NÃO, faremos uma requisição para adicionar um objeto 
     * de configuração do cliente no mongodb.
     */
    if (initializeObj === null) {
        return;
    } else {
        verb.post(createClient,
            header.defaultHeaders(),
            initializeObj)
            .then(response => {
                return response
            })
            .catch(error => new Error(error))
    }
}