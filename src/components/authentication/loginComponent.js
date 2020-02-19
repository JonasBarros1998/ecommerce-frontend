import { connect } from 'react-redux'
import React,{ Fragment } from 'react'

import Menu from '../../components/menu/MenuComponent'
import { MensageDanger } from '../../components/alerts&Mensages/mensages'
import BannerCrumbComponent from '../../components/banner/bannerCrumbComponent'
import AuthenticateContainer from '../../funcionalities/authentication/containers/authenticate.container';
import VerifieldEmailContainer  from '../../funcionalities/authentication/containers/verifieldEmail.container';
import { Link } from 'react-router-dom'

const LoginComponent = props => {

    const { statusAuthenticate, statusEmail } = props
    let viewMensage

    if (statusAuthenticate === true) {
        viewMensage = <MensageDanger mensage={"usuário ou senha inválida"} />
    }

    if(statusEmail === true){
        viewMensage = <MensageDanger mensage={"Email já existe, por favor faça login ao lado"} />
    }

    return (

        <Fragment >
          <Menu></Menu>
            <BannerCrumbComponent />

            <section className="login_box_area section_gap">
                <div className="container">
                    {viewMensage}
                    <div className="row">

                        <div className="col-lg-6">

                            <div className="login_form_inner">
                                <h3>Faça o login</h3>
                                <AuthenticateContainer />
                            <Link className = "color-gris-default" 
                                to="/recuperacao-de-senha">Esqueci minha senha </Link>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Crie sua conta</h3>
                                <VerifieldEmailContainer />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </Fragment>
    );
}

const mapStateToProps = store => {
    return {
        statusAuthenticate: store.authentication.statusAuthenticate,
        statusEmail: store.verificateEmail.statusEmail
    }
}

export default connect(mapStateToProps, null)(LoginComponent)