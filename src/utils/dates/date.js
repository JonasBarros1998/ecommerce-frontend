export const convertDate = (valueDate) =>{
    //Dividir a string em um array
    const dateSpreed = valueDate.split('/')
    //dateSpreed[0] = dia, dateSpreed[1] = mes, dateSpreed[2] = ano
   
    /*
     * Como a data vem no formato string, preciso converte-la para
     * valores inteiros
    */
    const convertYear = parseInt(dateSpreed[2])
    const convertMonth = parseInt(dateSpreed[1])
    const converDay = parseInt(dateSpreed[0])

    const birthday = new Date(convertYear, convertMonth, converDay)

    const year = birthday.getFullYear(convertYear)
    const month = birthday.getMonth(convertMonth)
    const  day = birthday.getDate(converDay)
    
   return `${year}-${month}-${day}`

}