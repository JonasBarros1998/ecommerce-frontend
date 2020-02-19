export const route = {
    oauth:{
        'token': 'http://127.0.0.1:8000/jm-ecommerce/authentication/token/',
    },

    user:{
        'verifield': 'http://127.0.0.1:8000/jm-ecommerce/user/register/verifield/',
        'create': 'http://127.0.0.1:8000/jm-ecommerce/user/register/',
    },

    user_id: {
        'id': 'http://127.0.0.1:8000/jm-ecommerce/authentication/id'
    }, 

    password: (hash) =>{
        //Url complet = http://127.0.0.1:8000/jm-ecommerce/authentication/reset-password/hash/1234567890
        const baseUrl = "http://127.0.0.1:8000/jm-ecommerce/authentication/reset-password/hash"
        const url = `${baseUrl}/${hash}`
        return url
    },
    submit: {
        email: 'http://localhost:8000/jm-ecommerce/authentication/forgot-password'
    }
}