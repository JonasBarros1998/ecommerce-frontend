export const generateNumber = () => {
    //Gerar numero aleatorio
    const number = (Math.random() * 10)

    //Converte esse numero para string
    const convertString = String(number)

    //Retira o ponto flutuante do numero
    const client_id = convertString.replace('.', '')
    return client_id
}





