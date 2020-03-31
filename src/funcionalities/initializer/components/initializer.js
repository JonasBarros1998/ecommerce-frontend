import React, { useEffect } from 'react'
import { generateNumber } from '../../../utils/numberAleators/numbersAleators.js'

const Initializer = () => {
    
    useEffect(() => {
        //gerar um id para o cliente que acessa o sistema
        generateNumber()
    })

    return (
        <>
        </>
    )
}

export default Initializer