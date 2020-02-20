/**
 * Componente para enviar o login de alteração de senha no email do usuario
 */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import SubmitUrl from '../../../funcionalities/authentication/containers/forgotPassword/submitUrl.container'
import { MensageDanger } from '../../../components/alerts&Mensages/mensages'
import BigAlert from '../../../components/alerts&Mensages/bigAlert'

const SubmitUrlComponent = props => {
    const [message, setMessage] = useState()
    const [messageSubmitUrl, setMessageSubmitUrl] = useState()

    useEffect(() => {
        if (props.username !== "") {
            setMessageSubmitUrl()
            setMessage(<MensageDanger
                message={props.username}
                classname={"alert alert-danger alert-dismissible fade show mt-3"} />)
        }
        return () => {
            setMessage()
        }
    }, [props.username])

    //Renderizar a mensagem, se o email foi enviado com sucesso
    useEffect(() => {
        if (props.submitUrl.submitMessage == true) {
            setMessage()
            setMessageSubmitUrl(<BigAlert class={"alert alert-success mt-5"}
                title={props.submitUrl.title}
                text={props.submitUrl.text}
                textFooter={props.submitUrl.textFooter} />)
        }
    }, [props.submitUrl.submitMessage])

    return (
        <>

            <div className="container">
                <spam className="mt-3">{message}</spam>
                <spam className="mt-3">{messageSubmitUrl}</spam>
                <div className="row d-flex justify-content-center c-center">
                    <div className="col-md-5 margin-1 padding_top_bottom_2">
                        <SubmitUrl />
                        
                    </div>
                </div >
            </div>
        </>
    )
}

const mapStateToProps = (store) => ({ username: store.submitUrl.username, submitUrl: store.submitUrl.submitUrl })
export default connect(mapStateToProps)(SubmitUrlComponent)