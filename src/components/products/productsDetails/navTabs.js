import React, { Component } from 'react'

/*class Navtabs siguinifica os titulos que ficam acima de cada das tabs
link examplo com bootstrap: https://getbootstrap.com/docs/4.3/components/navs/#tabs*/
class NavTabs extends Component {

    render() {
        return (
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link" id="home-tab" data-toggle="tab" href={"#home"} role="tab" aria-controls="home" 
                    aria-selected="true">Descrição</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href={"#profile"} role="tab" aria-controls="profile"
                        aria-selected="false">Especificação</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href={"#contact"} role="tab" aria-controls="contact"
                        aria-selected="false">Comentários</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" id="review-tab" data-toggle="tab" href={"#review"} role="tab" aria-controls="review"
                        aria-selected="false">Avaliações</a>
                </li>
            </ul>
        );
    }
}

export default NavTabs
