import React from 'react'

/*class Navtabs siguinifica os titulos que ficam acima de cada uma das tabs
link examplo com bootstrap: https://getbootstrap.com/docs/4.3/components/navs/#tabs*/
const NavTabs = () => {

        return (
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                <a className="nav-link genric-btn active"
                id="home-tab" data-toggle="tab" href={"#home"}
                role="tab" aria-controls="home" aria-selected="true">Descrição</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href={"#profile"}
                        role="tab" aria-controls="profile"
                        aria-selected="false">Especificação</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" id="review-tab" data-toggle="tab" href={"#review"}
                        role="tab" aria-controls="review"
                        aria-selected="false">Avaliações</a>
                </li>
            </ul>
        );
}

export default NavTabs