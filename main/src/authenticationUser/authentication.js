import env from '../../src/env'
import Http from "../codeUtilities/codePosts/posts.js";
import LocalStorage from '../Storage/localStorage.js'
import Headers from '../codeUtilities/Header/headers'
import {BrowserRouter as Router, 
    Route, 
    Redirect, 
    useHistory,
    useLocation} from 'react-router-dom'


class Authentication {
    
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
        this.http.post('http://127.0.0.1:8000/jm-ecommerce/token/', header, this.data)

        .then(tokenResponse =>{
            this.token(tokenResponse)
            //this.redirect()
        })  
        .catch(error=>{
            throw new Error(`HELP ${error}`)
        })
    }

    token(token){
        LocalStorage.addStorage('code_us_tk', token['access_token'])
    }
}

export default Authentication