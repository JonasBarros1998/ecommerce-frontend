/*** IMPORTS DEFAULT REACT ***/
import React, { useEffect } from 'react'

/*** IMPORTS APLICATION ***/
import Slide from './components/slide/slideComponent.js'
import Menu from './components/menu/MenuComponent.js'
import Footer from './components/footer/footerComponent.js'
import Category from './components/products/shop/categoryComponent'
import Products from './components/products/shop/productsComponent.js'
import Beneficies from './components/shopBeneficies/ecommerceBeneficiesComponent.js'
import ProdcutsSpecials from './components/products/shop/productsSpecialsComponent.js'
import Initializer  from './funcionalities/initializer/components/initializer'

const App = () => {
  useEffect(() => {

  })

  return (
    <>
      <Menu />

      <Slide />

      <Beneficies />

      <Category />

      <Products />

      <ProdcutsSpecials />

      <Footer />
    </>
  )
}

export default App;
