/**
 * Para esse modulo, essa url tem como responsabilidade
 * fazer a requisição para geração de um novo token, apartir 
 * do refresh_token 
 */
export const routes = {
    token:{
        gear: 'http://127.0.0.1:8000/jm-ecommerce/authentication/token/',
        validator: 'http://127.0.0.1:8000/jm-ecommerce/authentication/valid/token'
    }
}