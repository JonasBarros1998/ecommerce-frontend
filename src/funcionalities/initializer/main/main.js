import { client } from '../actions/configClient.action'
export const main = () => {

    /**
     * Chamo a função para iniciar algumas configurações 
     * para o cliente que acessa o sistema
     */
    client()
}