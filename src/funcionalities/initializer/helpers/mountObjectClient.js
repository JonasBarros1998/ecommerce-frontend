/**
 * arquvivo para montar um objeto inicial para que possamos guardar algumas 
 * informações dos clientes
 */

 /**
  * @param client_id Id do cliente que é atribuido quando ele entra no sistema
  */ 
export const mountObj = (client_id) => {
    const client = {
        id_client: client_id,
        items: [
        ],
        payer: {
            email: "",
            name: "",
            phone: {
                number: 0
            },
            identification: {
                type: "CPF",
                number: ""
            },
            address: {
                street_name: "",
                street_number: 0,
                zip_code: ""
            }
        },
        back_urls: {
            success: "http://localhost:3000/",
            failure: "http://localhost:3000/",
            pending: "http://localhost:3000/"
        },
        expires: true,
        expiration_date_from: "",
        expiration_date_to: ""
    }
    return client
}