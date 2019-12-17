import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import RegisterUserContainer from '../../funcionalities/user/containers/register.container'

const FIELDS_EQUAL = "FIELDS_IGUALS"
const MENSAGE_PASSWORD = "Os campos de senha são diferentes" 

const statusPassword = {
    mensagem: ""
}

const RegisterUser = props => {

    const {storePassword} = props

    return(
        useEffect(() =>{
            if(storePassword == FIELDS_EQUAL){
                statusPassword.mensagem = MENSAGE_PASSWORD
            }else{
                statusPassword.mensagem = null
            }
        }),
        
        <RegisterUserContainer />
    )
}

const mapStateToProps = store =>{
    return {storePassword: store.registerUser.password}
}

export default connect(mapStateToProps, null)(RegisterUser)