/**
 * Esse arquivo tem como principal funcionalidade formatar um conjunto 
 * da informações, provindas da api ecommerce.
*/
let formatObject = []
export const format = (datas) => {    
    for (const {products: products} of datas){
        const especification = formattingEspecification(products.especification)
        const media = formattingEspecification(products.media)

        Object.defineProperty(products, "especification", {
            value: especification, 
            writable: true,
            enumerable: false
        })

        Object.defineProperty(products, 'media', {
            value: media.media,
            writable: true,
            enumerable: false
        })
    }
    return datas
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

const formattingMedia = media =>{
    return JSON.parse(media)
}