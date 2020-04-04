/**
 * Rotas
 */
export const routes = {
    filter: {
        allCategories: "http://localhost:8000/jm-ecommerce/products/categories",
        allMake: "http://localhost:8000/jm-ecommerce/products/make",
        selectMake: "",
    },
    shopping: {
        products: (itens, page) =>("http://localhost:8000/jm-ecommerce/products/")
    },

    selectFilter: {
        selectMake: (make) => {
            return `http://localhost:8000/jm-ecommerce/products/one-make/${make}`
        },
        selectCategorie: (categorie) => {
            return `http://localhost:8000/jm-ecommerce/products/categories/${categorie}`
        }
    }
}