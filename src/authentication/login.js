import env from '../_environment/env.js'
import Http from "../utils/requisition/methods.js"
import LocalStorage from '../utils/storage/localStorage.js'
import Headers from '../utils/header/headers.js'
import action from '../routes/actions.js'

class Login {
    
    constructor(){
        this.data = {}
        this.headers = new Headers()
        this.http = new Http()
    }

    authentication(state){

        //headers for gear the token
        const header = this.headers.headersForGearToken()

        const client_id = env['OAUTH'].CLIENT_ID
        const client_secret = env['OAUTH'].CLIENT_SECRET

        this.data = {
            'client_id': client_id,
            'client_secret':client_secret,
            'username': this.data.name = state.name,
            'password': this.data.password = state.password,
            'grant_type':'password'
        }
        const actionToken = action['oauth']['token']
        this.http.post(actionToken, header, this.data)

        .then(tokenResponse =>{
            this.token(tokenResponse)
        })  
        .catch(error=>{
            throw new Error(`HELP ${error}`)
        })
    }

    //salvar o token dentro dentro do local storage no navegador
    token(token){
        LocalStorage.addStorage('code_us_tk', token['access_token'])
    }

    //Metodo para verificar se o e-mail existe, antes de iniciar o processo de cadastro
    verifield(data){
        console.log(data)
        const header = this.headers.headersDefault()
        const actionVerifield = action['user']['verifield']
        this.http.post(actionVerifield, header, data)
    }


}

export default Login