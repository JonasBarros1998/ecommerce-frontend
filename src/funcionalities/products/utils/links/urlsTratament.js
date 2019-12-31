/**
 * O modulo tem a reponsabilidade de separar a url, e
 * capturar o que vai ser usado dentro do endpoint da api. 
 * A função urls vai retornar um array, com os valores 
 * que queremos passar para o endpoint da api
 * Com isso a url tem que seguir um unico padrão.
 * 
 * exemplo: localhost://3000/jm-ecommerce/item/cftv/camera-1010b/1234
 * jm-ecommerce: Aqui pode ser qualquer nome.
 * item: Pode ser colocado qualquer nome.
 * cftv: é examente aqui, logo em seguida do "item"(ou qualquer outro
 * nome que você queira usar), na qual tem que estar.
 * localizada a categoria que o produto está relacionada. 
 * camera-1010b: Pode ser colocado qualquer nome, afinal não iremos usar. 
 * 1234: Esse é o id do produto, por obrigação, tem que estar na ultima 
 * posição da url, para que assim possamos saber qual é o id do produto.
 */

export const tratament = (url) => {

    const splitUrl = url.split('/')
    const categorie = splitUrl[2]
    const idProduct = splitUrl[splitUrl.length - 1]

    const params = {
        'categorie': categorie,
        'idProduct': idProduct
    }

    return params

}
