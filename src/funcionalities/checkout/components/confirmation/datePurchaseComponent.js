/**
 * Componente para renderização da Data de compra do produto
 */
import React, { useState, useEffect } from 'react'

const DatePurchaseComponent = props => {
    const datas = props.date
    let [day, setDay] = useState(0)
    let [month, setMonth] = useState(0)
    let [year, setYear] = useState(0)

    useEffect(() => {
        if (datas !== undefined) {
            const date = new Date(datas.expiration_date_from)
            setDay(date.getDate())
            setMonth(date.getMonth())
            setYear(date.getFullYear())
        }
    }, [datas])
    return (
        <>
            <a href="/#">
                <span>Data</span>
                : {day <= 9 ? `0${day}` : day}/{month <= 9 ? `0${month}` : month}/{year}</a>
        </>
    )
}

export default DatePurchaseComponent