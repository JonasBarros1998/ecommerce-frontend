export const formattingObjmongodb = (response, client_id) => {
    response.back_urls['success'] = `http://localhost:3000/confirmacao-do-pedido/${client_id}`
    const datas = {
        'find': client_id,
        'datas': {
            '$set': {
                ...response
            }
        }
    }
    return datas
} 