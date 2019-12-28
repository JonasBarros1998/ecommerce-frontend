import React from 'react'

const InfoProductComponent = () => {

    return (
        <div>
            <h3>Faded SkyBlu Denim Jeans</h3>
            <h2 className="color-default">R$ 149.99</h2>

            <ul className="list">
                <li><small>Categoria</small> : <small className="color-default">CFTV</small></li>
                <li><small>Diponibilidade</small> : <small>Em estoque</small></li>
            </ul>

            <p>Mill Oil is an innovative oil filled radiator with the most modern technology. 
                If you are looking for something that can make your interior look awesome, 
                and at the same time give you the pleasant warm feeling during the winter.</p>

            <div className="product_count">
                <label>Quantidade:</label>
                <input type="number" name="quantity" className="input-text qty" />
            </div>
        </div>
    );
}

export default InfoProductComponent