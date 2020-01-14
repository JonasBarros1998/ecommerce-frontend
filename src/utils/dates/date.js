/**
 * Função para converter data que esta no formato string, para o formato dete
 * parametros: 
 * valueDate: uma data quaiquer
 * locale: aqui voce pode passar dentro desse objeto, qual o formato que 
 * voce deseja que a data seja convertida, por padrão a data vai sair 
 * no formato de ano/mes/dia.
 * 
 * Para adicionar mais formatos diferentes dos padrões atuais, 
 * vai ter que adicionar mais um case, com o formato que deseja
 */

export const convertDate = (valueDate, locale = {}) => {
    //Caso a data vier com '-' substituir por barras
    const replaceDate = valueDate.replace(/-/gi, "/")
    //Dividir a string em um array
    const dateSpreed = replaceDate.split('/')

    switch (locale.format) {
        case 'PT_BR':
            const convertYear = parseInt(dateSpreed[0])
            const convertMonth = parseInt(dateSpreed[1])    
            const convertDay = parseInt(dateSpreed[2])

            const date = new Date(convertYear, convertMonth, convertDay)

            const year = date.getFullYear(convertYear)
            const month = date.getMonth(convertMonth)
            const day = date.getDate(convertDay)

            if(month <= 9){
                return `${day}-0${month}-${year}`
            }
            return `${day}-${month}-${year}`
            
        default:
            const checkYear = parseInt(dateSpreed[2])
            const checkMonth = parseInt(dateSpreed[1])
            const checkDay = parseInt(dateSpreed[0])

            const birthday = new Date(convertYear, convertMonth, convertDay)

            const getyear = birthday.getFullYear(checkYear)
            const getmonth = birthday.getMonth(checkMonth)
            const getday = birthday.getDate(checkDay)
            return `${getday}-${getmonth}-${getyear}`
    }
}