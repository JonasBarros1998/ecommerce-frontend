import React from 'react'

const SelectComponent = props => {
    return (
        <select className="custom-select mr-sm-2 form-control select-delivery" 
        id="states"
        onChange = {e=> props.select(e)}>
            <option defaultValue>Selecione...</option>
            <option value="1">Acre</option>
            <option value="2">Alagoas</option>
            <option value="3">Amapá</option>
            <option value="4">Amazonas</option>
            <option value="5">Bahia</option>
            <option value="6">Ceará</option>
            <option value="7">Distrito Federal</option>
            <option value="8">Espírito Santo</option>
            <option value="9">Goiás</option>
            <option value="10">Maranhão</option>
            <option value="11">Mato Grosso</option>
            <option value="12">Mato Grosso do Sul</option>
            <option value="13">Minas Gerais</option>
            <option value="14">Pará</option>
            <option value="15">Paraíba</option>
            <option value="16">Paraná</option>
            <option value="17">Pernambuco</option>
            <option value="18">Piauí</option>
            <option value="19">Rio de Janeiro</option>
            <option value="20">Rio Grnade do Norte</option>
            <option value="21">Rio Grande do Sul</option>
            <option value="22">Rondônia</option>
            <option value="23">Roraima</option>
            <option value="24">Santa Catarina</option>
            <option value="25">São Paulo</option>
            <option value="26">Sergipe</option>
            <option value="27">Tocantins</option>
        </select>
    )
}

export default SelectComponent