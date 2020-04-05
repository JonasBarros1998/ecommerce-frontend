/**
 * Esse componente tem as seguintes responsabilidades: 
 * 
 * Renderizar todos os itens comprados pelo cliente. 
 * Renderizar o preço total do carrinho.
 * Excluir um item do carrinho do cliente.  
 */
import React from 'react'
import { Link } from 'react-router-dom'

import ValueTotal from '../container/valueTotal'
import SelectContainer from '../container/selectContainer'
import DeleteContainer from '../container/deleteContainer'

const ListingAllProductContainer = props => {
    console.log(props)
    return (
        <>
            {
                props.cart.map((item, index) => {

                    return (<tr key={index}>
                        <td colSpan="4" >
                            <div className="media">
                                <div className="block-image">
                                    <img className="image" src={item.link} alt="ImageProduct" />
                                </div>
                                <div className="media-body">
                                    <p className="text-grey-p">
                                        {
                                            <Link to={`/item/${item.categorie}/${item.name.replace(/ /gi, "_")}/${item.id}`} className="text-grey-p link">
                                                {item.name}
                                            </Link>
                                        }
                                        <br />
                                        <DeleteContainer deleteItem={item} />
                                    </p>
                                </div>
                            </div>
                        </td>
                        <td>
                            {/** Select Container*/}
                            <SelectContainer itemCart={item} />
                        </td>
                        <td>
                            {
                                <p className="text bold">{
                                        item.price.toLocaleString('pt-BR', {
                                            style: 'currency',
                                            currency: 'BRL'
                                        })
                                    }</p>
                            }
                        </td>
                    </tr>)
                })
            }

            <tr>
                <td colSpan="4"></td>
                <td>
                    <p className="text bold">Valor total</p>
                </td>
                <td>

                    {/**Componente para renderizar o valor total do carrinho**/
                        props.cart.length === 0
                            ?
                            <div></div>
                            :
                            <ValueTotal value={props.cart} />
                    }

                </td>
            </tr>
            </>
    )
}

export default ListingAllProductContainer

/**
 * [
  {
    "id": 8,
    "resolution": "720p",
    "amountCameras": 1,
    "coaxialCableSize": 100.0,
    "products": {
      "id": 6,
      "name": "Câmera Xiaomi Mijia Wifi 360 1080P Compatível com Alexa",
      "price": 234.45,
      "fullDescription": "Câmera de Segurança Xiaomi Mi Home 360° 1080P Visão de 360 ° significa proteção total em casa A cabeça do motor duplo permite que a câmera gire e capture uma visão horizontal de 360 ° e uma visão vertical de 96°. O design à prova de choque e o motor silencioso da câmera permitem que a rotação permaneça suave e silenciosa. Uma nova e melhor visão noturna A abertura F2.1 permite mais entrada de luz, enquanto o iluminador infravermelho de 940 nm aumenta a visibilidade. Visualizar no escuro agora se tornou mais fácil. Instale na posição vertical ou invertida A câmera é pré-instalada com a base de rotação e pode ser colocada em uma mesa, janela, teto ou parede. A instalação invertida é possível com uma pequena alteração na configuração da câmera. - Visão Total de 1080P FHD Picture360° - Infravermelho - Visão noturna - Detector de movimento - Recurso de Talkback - (Áudio de 2 vias) Dimensões do produto: 78 x 78 x 118 mm Peso líquido: 239g Entrada de energia: 5V2A Ângulo da lente: 110° Resolução: 1080p Comprimento focal: 3,9 mm Conectividade sem fio: Wi-Fi IEEE 802.11 b / g / n 2.4 GHz Memória Expansível: Cartão MicroSD (até 64GB) - Não acompanha cartão Micro SD Compatível com: Android 4.4, IOS 9.0 ou posterior Obs* Não acompanha o plugin de carregamento, apenas o cabo USB.",
      "description": "Este item pode ser controlado por voz usando um Dispositivo Echo ou outro produto que possua Alexa Integrada",
      "make": "Xiaomi",
      "model": "QDJ4041GL",
      "amount": 3,
      "especification": "\"{\"Marca\":\"Xiaomi\",\"Zoom óptico\":\"3 X\",\"Tamanho da tela\":\"2 Inches\",\"Distância focal\":\"2.8 Millimeters\",\"Modelo\":\"QDJ4041GL\",\"Voltagem\":\"5 volts\",\"Dimensões do produto\":\"16 x 9 x 8 cm ; 259 g\",\"Dimensões do pacote\":\"16,2 x 9,2 x 8,8 cm\"}\"",
      "categorie": "cftv",
      "media": "\"{\"media\":[\"http://products.integrardados.com.br/camera1.jpeg\",\"http://products.integrardados.com.br/camera1.jpeg\",\"http://products.integrardados.com.br/camera3.jpg\",\"http://products.integrardados.com.br/camera4.png\"]}\""
    }
  }
]
 */