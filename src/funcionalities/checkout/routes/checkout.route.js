export const checkoutRoute = {
    mercadoPago: {
        "payment":"http://localhost:5050/checkout/"
    },

    client: {
        "purchase": "http://localhost:8000/jm-ecommerce/client/save-purchase",
        aproved: (id_client) => (
            `http://localhost:8000/jm-ecommerce/client/listing-one/?to_find=id_client-${id_client}`
        )
    },
    
}