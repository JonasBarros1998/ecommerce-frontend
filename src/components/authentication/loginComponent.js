import React from 'react'
import AuthenticateContainer from '../../funcionalities/authentication/containers/authenticate.container';
import { VerifieldUserContainers } from '../../funcionalities/authentication/containers/verifieldUser.container';

const LoginComponent = () => {

    return (
        <section className="login_box_area section_gap">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6">
                        <div className="login_form_inner">
                            <h3>Faça o login</h3>
                            <AuthenticateContainer />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="login_form_inner">
                            <h3>Crie sua conta</h3>
                            <VerifieldUserContainers />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default LoginComponent