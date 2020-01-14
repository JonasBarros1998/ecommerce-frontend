export const routes = {
    comment: {
        'new': 'http://127.0.0.1:8000/jm-ecommerce/comments/',
        list: (product_id) =>(
            `http://127.0.0.1:8000/jm-ecommerce/comments/${product_id}`)
    }
}