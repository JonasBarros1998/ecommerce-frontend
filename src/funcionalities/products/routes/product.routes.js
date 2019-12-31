const baseUrl = "http://127.0.0.1:8000/jm-ecommerce/products"

//Url example: http://127.0.0.1:8000/jm-ecommerce/products/cftv/4

export const routes = {
    product: (id, categorie) => {
        const fullUrl = `${baseUrl}/${categorie}/${id}`
        return fullUrl
    }
} 