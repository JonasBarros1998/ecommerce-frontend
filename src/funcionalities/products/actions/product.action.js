import { routes } from '../routes/product.routes'
import { verb } from '../../../utils/http/verbs'
import { tratament } from '../utils/links/urlsTratament'
import { PRODUCT } from '../constants/product.constants'
import { format } from '../utils/objects/formattingObjects'

const productDetails = product => {
    return {
        type: PRODUCT,
        product
    }
}

export const listingProductDetails = (pathname) => {
    //Chamando o metodo 'tratament' para extração de dados 
    //para encaixarmos na url
    const {categorie, idProduct} = tratament(pathname)
    
    return dispatch => {
        const urlProduct = routes.product(idProduct, categorie)
        return verb.get(urlProduct)
        .then(response => {
            const result = format(response)  
            dispatch(productDetails(result))
        }).catch(erro => new Error(erro))
    }
}

/**
 * [
  {
    "id": 9,
    "resolution": "720p",
    "amountCameras": 1,
    "coaxialCableSize": 100.0,
    "products": {
      "id": 14,
      "name": "Câmera Xiaomi Mijia Wifi 360 1080P Compatível com Alexa",
      "price": 234.45,
      "fullDescription": "Câmera de Segurança Xiaomi Mi Home 360° 1080P Visão de 360 ° significa proteção total em casa A cabeça do motor duplo permite que a câmera gire e capture uma visão horizontal de 360 ° e uma visão vertical de 96°. O design à prova de choque e o motor silencioso da câmera permitem que a rotação permaneça suave e silenciosa. Uma nova e melhor visão noturna A abertura F2.1 permite mais entrada de luz, enquanto o iluminador infravermelho de 940 nm aumenta a visibilidade. Visualizar no escuro agora se tornou mais fácil. Instale na posição vertical ou invertida A câmera é pré-instalada com a base de rotação e pode ser colocada em uma mesa, janela, teto ou parede. A instalação invertida é possível com uma pequena alteração na configuração da câmera. - Visão Total de 1080P FHD Picture360° - Infravermelho - Visão noturna - Detector de movimento - Recurso de Talkback - (Áudio de 2 vias) Dimensões do produto: 78 x 78 x 118 mm Peso líquido: 239g Entrada de energia: 5V2A Ângulo da lente: 110° Resolução: 1080p Comprimento focal: 3,9 mm Conectividade sem fio: Wi-Fi IEEE 802.11 b / g / n 2.4 GHz Memória Expansível: Cartão MicroSD (até 64GB) - Não acompanha cartão Micro SD Compatível com: Android 4.4, IOS 9.0 ou posterior Obs* Não acompanha o plugin de carregamento, apenas o cabo USB.",
      "description": "Este item pode ser controlado por voz usando um Dispositivo Echo ou outro produto que possua Alexa Integrada",
      "make": "Xiaomi",
      "model": "QDJ4041GL",
      "amount": 3,
      "especification": "",
      "categorie": "cftv",
      "media": "\"{\"media\":[\"http://products.integrardados.com.br/camera1.jpeg\",\"http://products.integrardados.com.br/camera1.jpeg\",\"http://products.integrardados.com.br/camera3.jpg\",\"http://products.integrardados.com.br/camera4.png\"]}\""
    }
  }
]
 */