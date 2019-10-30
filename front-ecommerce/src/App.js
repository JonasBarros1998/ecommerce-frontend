/*** IMPORTS DEFAULT REACT ***/
import React, { Component } from 'react'

/*** IMPORTS APLICATION ***/
import Menu from './components/mainMenu/Menu.js'
import Slide from './components/mainSlide/Slide.js'
import Beneficies from './components/shopBeneficies/beneficies.js'
import Category from './components/productsCategory/category.js'
import Products from './components/mainProducts/Products.js'
import ProdcutsSpecials from './components/mainProducts/productsSpecials.js'
import Footer from './components/mainFooter/footer.js'

/*** IMPORTS STYLES CSS***/
import './styles/availability-calendar.css'
import './styles/bootstrap.css'
import './styles/font-awesome.min.css'
import './styles/ion.rangeSlider.css'
import './styles/ion.rangeSlider.skinFlat.css'
import './styles/jquerysctipttop.css'
import './styles/linearicons.css'
import './styles/nice-select.css'
import './styles/nouislider.min.css'
import './styles/themify-icons.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './styles/main.css'


/*** IMPORT JAVASCRIPT ***/
import './statics/jquery-3.4.1.min.js'
import './statics/vendor/bootstrap.min.js'
import './statics/jquery.nice-select.min.js'
import './statics/jquery.sticky.js'
import './statics/nouislider.min.js'
import './statics/countdown.js'
import './statics/main.js'

class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {

    return (
      <span>
        <Menu></Menu>

        <Slide></Slide>

        <Beneficies></Beneficies>

        <Category></Category>

        <Products></Products>
        
        <ProdcutsSpecials></ProdcutsSpecials>

        <Footer></Footer>
      </span>
    )
    
  }
}

export default App;
