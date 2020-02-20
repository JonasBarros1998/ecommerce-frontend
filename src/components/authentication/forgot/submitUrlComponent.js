/**
 * Componente para enviar o login de alteração de senha no email do usuario
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import SubmitUrl from '../../../funcionalities/authentication/containers/forgotPassword/submitUrl.container'
import { MensageDanger } from '../../../components/alerts&Mensages/mensages'
import BigAlert from '../../../components/alerts&Mensages/bigAlert'
import BannerCrumbComponent from '../../../components/banner/bannerCrumbComponent'

const SubmitUrlComponent = props => {
    const [message, setMessage] = useState()
    const [messageSubmitUrl, setMessageSubmitUrl] = useState()

    //Renderizar uma mensagem caso o email não existe
    useEffect(() => {
        if (props.username === true) {
            setMessage(
            <MensageDanger
                message={"Esse usuário não existe."}
                classname={"alert alert-danger alert-dismissible fade show mt-3"} />)
        }
    }, [ props.username ])

    //Renderizar a mensagem, se o email foi enviado com sucesso
    useEffect(() => {
        if (props.submitMessage === true) {

            setMessageSubmitUrl(
                <BigAlert class={"alert alert-success mt-5"}
                    title = {"e-mail enviado!"}
                    text = {`Caso não consiga visualizar seu e-mail na sua caixa de 
                    entrada, não se esqueça de verificar na sua caixa de spam.`}
                    textFooter = {""} />)
        }   
    }, [ props.submitMessage ])

    return (
        <>
        <BannerCrumbComponent />
            <div className="container">
                <span className="mt-3">{message}</span>
                <span className="mt-3">{messageSubmitUrl}</span>
                <div className="row d-flex justify-content-center c-center">
                    <div className="col-md-5 margin-1 padding_top_bottom_2">
                        <SubmitUrl />
                    </div>
                </div >
            </div>
        </>
    )
}

const mapStateToProps = (store) => ({
    username: store.submitUrl.username,
    submitMessage: store.submitUrl.submitMessage
})
export default connect(mapStateToProps)(SubmitUrlComponent)