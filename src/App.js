/*** IMPORTS DEFAULT REACT ***/
import React from 'react'

/*** IMPORTS APLICATION ***/
import Menu from './components/menu/MenuComponent.js'
import Slide from './components/slide/slideComponent.js'
import Beneficies from './components/shopBeneficies/ecommerceBeneficiesComponent.js'
import Products from './components/products/shop/productsComponent.js'
import ProdcutsSpecials from './components/products/shop/productsSpecialsComponent.js'
import Category from './components/products/shop/categoryComponent'
import Footer from './components/footer/footerComponent.js'

const App = () =>  {
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

export default App;
