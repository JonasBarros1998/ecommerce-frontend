import React, { useEffect } from 'react'
import { generateNumber } from '../../../utils/numberAleators/numbersAleators.js'

const Initializer = () => {
    
    useEffect(() => {
        //Gerar numeros aleatorios
        generateNumber()
    })

    return (
        <>
        </>
    )
}

export default Initializer