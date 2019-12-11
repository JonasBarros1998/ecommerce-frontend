import React, { Fragment, Component } from 'react'
import RegisterNewUser from '../../../components/authentication/registerNewUser'
import Menu from '../../../components/menu/MenuComponent'
import BannerCrumbComponent from '../../../components/banner/bannerCrumbComponent'

const NewUser = () => {

    return (
        <Fragment>
            <BannerCrumbComponent />
            <Menu />
            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12 col-xl-11 col-sm-12">
                            <div className="login_form_inner_2">
                                <div className="mb-2">
                                    <h3>Quer se cadastrar ?</h3>
                                    <p>Por favor, preencha os campos abaixo, é rapidinho</p>
                                </div>
                                <RegisterNewUser />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default NewUser