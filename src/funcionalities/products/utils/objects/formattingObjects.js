/**
 * Esse arquivo tem como principal funcionalidade 
 * formatar um conjunto da informações, provindas 
 * da api ecommerce.
*/
let formatObject = []
export const format = (datas) => {    

    datas.map(data => {
        const newObejct = Object.assign({}, data, {
            products: {
                id: data.products.id,
                title: data.products.title,
                price: data.products.price,
                fullDescription: data.products.fullDescription,
                description: data.products.description,
                make: data.products.make,
                model: data.products.model,
                amount: data.products.amount,
                especification: formattingEspecification(data.products.especification),      
                categories: data.products.categories,
            }
        })
        return formatObject.push(newObejct)
    }) 
    return formatObject
}

//Como a especification vem do banco de dados como uma unica string, 
//essa função é capaz de converte-la para um objeto, para
//que possamos usa-la.
const formattingEspecification = (especification) => {
    const convertStringFirstPart = especification.replace(/"/, "")
    const convertStringSecondPart = convertStringFirstPart.replace(/}"/, "}")
    const especificationProduct = JSON.parse(convertStringSecondPart)
    return especificationProduct
}