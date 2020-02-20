/**
 * Container com a função de apenas redirecionar o usuario, 
 * se a alteração de senha for bem sucedida
 */
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const Redirecting = props => {
    return (
        <Route>
            {/* Redirecionar o usuario para pagina de login */}
            <Redirect to="/login"></Redirect>
        </Route>
    )
}

export default Redirecting