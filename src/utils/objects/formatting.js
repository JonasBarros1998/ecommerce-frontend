/**
 * A função tem como principal objetivo capturar os dados em formato de string, e converte-los
 * em objetos javaScript
 * @param datas string que precisa ser convertida para objeto javaScript
 */
export const formatting = (datas) => {
    const convertStringFirstPart = datas.replace(/"/, "")
    const convertStringSecondPart = convertStringFirstPart.replace(/}"/, "}")
    const especificationProduct = JSON.parse(convertStringSecondPart)
    return especificationProduct
}
