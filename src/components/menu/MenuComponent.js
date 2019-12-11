import React from 'react'
import { Link } from "react-router-dom";

const Menu = () => {

    return (
        <header className="header_area sticky-header">
            <div className="main_menu">
                <nav className="navbar navbar-expand-lg navbar-light main_box">
                    <div className="container">
                        <a className="navbar-brand logo_h" href={"localhost://3000"}>
                            <img src="img/logo.png" alt="" />
                        </a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                            <ul className="nav navbar-nav menu_nav ml-auto">
                                <li className="nav-item active"><a className="nav-link" href={"http://localhost:3000/"}>Pagina inicial</a></li>

                                <li className="nav-item submenu dropdown">
                                    <a href={"localhost://3000"} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">Shop</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href={"localhost://3000"}>Shop Category</a></li>
                                        <li className="nav-item"><a href={"localhost://3000"} className="nav-link">Product
											Details</a></li>
                                        <li className="nav-item"><a className="nav-link" href={"localhost://3000"}>Product Checkout</a>
                                        </li>
                                        <li className="nav-item"><a className="nav-link" href={"localhost://3000"}>Shopping Cart</a></li>
                                        <li className="nav-item"><a className="nav-link" href={"localhost://3000"}>Confirmation</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <a href={"localhost://3000"} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">Blog</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href={"localhost://3000"}>Blog</a></li>
                                        <li className="nav-item"><a className="nav-link" href={"localhost://3000"}>Blog Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item submenu dropdown">
                                    <a href={"localhost://3000"} className="nav-link dropdown-toggle" data-toggle="dropdown" role="button"
                                        aria-haspopup="true" aria-expanded="false">Pages</a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a className="nav-link" href={"http://localhost:3000/login"}>Pagina inicial</a></li>
                                        <li className="nav-item"><a className="nav-link" href={"localhost://3000"}>Tracking</a></li>
                                        <li className="nav-item"><a className="nav-link" href={"localhost://3000"}>Elements</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item"><a className="nav-link" href={"localhost://3000"}>Contact</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li className="nav-item"><a href={"localhost://3000"} className="cart"><span className="ti-bag"></span></a></li>
                                <li className="nav-item">
                                    <button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div className="search_input" id="search_input_box">
                <div className="container">
                    <form className="d-flex justify-content-between">
                        <input type="text" className="form-control" id="search_input" placeholder="Search Here" />
                        <button type="submit" className="btn"></button>
                        <span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
                    </form>
                </div>
            </div>
        </header>
    )
}

export default Menu