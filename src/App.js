/*** IMPORTS DEFAULT REACT ***/
import React, { Component } from 'react'

/*** IMPORTS APLICATION ***/
import Menu from './components/menu/MenuComponent.js'
import Slide from './components/slide/slideComponent.js'
import Beneficies from './components/shopBeneficies/ecommerceBeneficiesComponent.js'
import Products from './components/products/productsComponent.js'
import ProdcutsSpecials from './components/products/productsSpecialsComponent.js'
import Category from './components/products/categoryComponent'
import Footer from './components/footer/footerComponent.js'

/*** IMPORTS STYLES CSS ***/
import './_assets/styles/bootstrap.css'
import './_assets/styles/font-awesome.min.css'
import './_assets/styles/linearicons.css'
import './_assets/styles/themify-icons.css'
import './_assets/styles/main.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

/*** IMPORT JAVASCRIPT ***/
import './_assets/Js/jquery-3.4.1.min.js'
import './_assets/Js/bootstrap.min.js'
import './_assets/Js/main.js'
import './_assets/Js/popper.js'


class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  componentDidMount(){

  }

  render() {

    return (
      <span>
        <Menu />

        <Slide />

        <Beneficies />

        <Category />

        <Products />
        
        <ProdcutsSpecials />

        <Footer />
        
      </span>
    )
    
  }
}

export default App;
