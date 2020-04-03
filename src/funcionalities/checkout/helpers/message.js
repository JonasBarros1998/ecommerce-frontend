//Funçao para apresentar a mesagem para o  usuario, avisando que vai ser redirecionado, ao sistema do mercado pagp
export const message = () => {
    //Desabilitar o botão de mercado pago
    document.querySelector('.btn-mercadopago').classList.add('disabled')
    //Retirar a classe fade, do alert
    document.querySelector('.alert-success').classList.remove('fade')
    //Adicionar a mensagem, para o usuario saber que vai ser redirecionado
    document.querySelector('.alert-text').innerHTML = "Aguarde em instantes você será redirecionado para mercado pago"
}
