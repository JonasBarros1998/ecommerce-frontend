import React from 'react'

const SelectAddressComponent = props => {
    return (
        <select className="custom-select mr-sm-2 form-control select-delivery"
            id="typeAddress"
            onChange={e => props.select(e)}>
            <option defaultValue>Selecione...</option>
            <option value="1">Avenida</option>
            <option value="2">Rua</option>
            <option value="3">Praça</option>
            <option value="4">Quadra</option>
            <option value="5">Estrada</option>
            <option value="6">Alameda</option>
            <option value="7">Ladeira</option>
            <option value="8">Travessa</option>
            <option value="9">Rodovia</option>
        </select>
    )
}

export default SelectAddressComponent