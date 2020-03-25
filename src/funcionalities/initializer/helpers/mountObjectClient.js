/**
 * arquvivo para montar um objeto inicial para guardar algumas 
 * informações dos clientes
 */

export const mountObj = (client_id) => {
    const client = {
        "id_client": client_id,
        "items": [
        ],
        "payer": {
            "email": ""
        },
        "address": {
        },
        "personationInfo": {
        }
    }
    return client
}