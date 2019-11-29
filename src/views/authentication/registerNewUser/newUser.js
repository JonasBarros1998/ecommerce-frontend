import React, { Fragment, Component } from 'react'
import RegisterNewUser from '../../../components/authentication/registerNewUser'
import Menu from '../../../components/menu/MenuComponent'
import BannerCrumbComponent from '../../../components/banner/bannerCrumbComponent' 
export default class NewUser extends Component {
    render() {
        return (
            <Fragment>
                <BannerCrumbComponent />
                <Menu />
                <RegisterNewUser />
            </Fragment>
        );
    }
}