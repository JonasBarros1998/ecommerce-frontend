/**
 * Componete tem como principal funcionalidade, de fornecer um formulario
 * para alteraração de senha do usuario
 */
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Badge from '../../alerts&Mensages/badges'
import ForgotPasswordContainer from '../../../funcionalities/authentication/containers/forgotPassword/forgot.container'

const AlterPassword = props => {

    const [passwordEqual, setPasswordEqual] = useState()
    const [passwordInvalid, setPasswordInvalid] = useState()

    useEffect(() => {
        if (props.equalPassword !== "") {
            setPasswordInvalid()
            setPasswordEqual(<Badge classname={"badge badge-danger mb-2"}
                message={props.equalPassword} />)
        }
        return () => {
            setPasswordEqual()
        }
    }, [props.equalPassword])

    useEffect(() => {
        if (props.messagePassword !== "") {
            setPasswordEqual()
            setPasswordInvalid(<Badge classname={"badge badge-danger mb-2"}
                message={props.messagePassword} />)
        }
        return () => {
            setPasswordInvalid()
        }
    }, [props.messagePassword])

    return (<section className="login_box_area section_gap">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-lg-6">
                    <div className="login_form_inner">
                        <h3 className="text-center">Altere sua senha</h3>
                        <ForgotPasswordContainer />

                        {/* Renderizar a mensagem para quem digitou senhas diferentes */}
                        <div className="col-md-12 d-flex justify-content-center">
                            <div>{passwordEqual}</div>
                            <div>{passwordInvalid}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section >)
}

const mapStateToProps = store => ({
    messagePassword: store.alterPassword.password,
    equalPassword: store.alterPassword.equalPassword,
    redirect: store.alterPassword.redirect
})
export default connect(mapStateToProps)(AlterPassword)