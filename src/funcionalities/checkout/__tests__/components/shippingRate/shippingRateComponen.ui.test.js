/**
 * Name: componente de listagem de produtos e calcular o valor do frete
 * Test component UI and props
 */
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ShippingRateComponent from '../../../components/shippingRate/shippingRateComponent'

Enzyme.configure({adapter: new Adapter() })

const setup = () => {
    const props = {
        addTodo: jest.fn()
    }

    const shippingRateComponent = shallow(<ShippingRateComponent />);
    return {
        props, 
        shippingRateComponent
    }
}
describe('Componente de entrega de produtos', () => {
    const {shippingRateComponent} = setup()

    //Titulo: Pagamento
    it('must have delivery type', () => {
        expect(shippingRateComponent
        .find('#payment').text())
        .toBe('Pagamento');
    });

    //Escolher a empresa que irá entregar a mercadoria
    it('Escolher o tipo de entrega', () => {
        expect(shippingRateComponent
            .find('#escolher_entrega').text())
            .toBe('Qual tipo de entrega você deseja?')
    });

    //Nome da empresa que vendeu o produto para voce 
    it('especificar quem entrega a mercadoria', () => {
        expect(shippingRateComponent 
            .find('#delivery').children().text())
            .toBe('Vendido e entregue por J&M ecommerce')
    })
})



/**
 *  it('should match the snapshot', () => {
        expect(shippingRateComponent.html()).toMatchSnapshot();
    });
 */