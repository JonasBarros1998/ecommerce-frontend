import React, { useState, useEffect } from 'react'

const AddressComponent = props => {

    const [address, setAddress] = useState([])

    useEffect(() => {
        if (props.address !== undefined) {
            setAddress(props.address)
        }
    })

    return (
        <>
            {
                address.map((item, index) => (
                    <ul className="list" key={index}>
                        <li><a href="#"><span>Endereço</span> : {item.payer.address.street_name}, {item.payer.address.street_number}</a></li>
                        <li><a href="#"><span>Cep </span> : {item.payer.address.zip_code}</a></li>
                    </ul>
                ))
            }
        </>
    )
}

export default AddressComponent