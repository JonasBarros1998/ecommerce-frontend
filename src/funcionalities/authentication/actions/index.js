import {verb} from '../../../utils/http/verbs.js'; 
import {route} from '../routes/route.js';
import {HttpHeaders as header }   from '../../../utils/header/headers.js';

//email: 000 password: 000
export const authentication = value =>{

    const url = route.oauth['token']
    const headerToken = header.headersForGearToken()

    verb.post(url, headerToken, value)
    .then(response =>{
        return {
            type: "SUBMIT_LOGIN",
            value: response
        }
    })
    .catch(error => new Error(`Help: ${error}`))
} 