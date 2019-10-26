/*** IMPORTS DEFAULT REACT ***/
import React, {Component} from 'react'

/*** IMPORTS STYLES CSS***/
import './styles/availability-calendar.css'
import './styles/bootstrap.css'
import './styles/bootstrap.map'
import './styles/font-awesome.min.css'
import './styles/ion.rangeSlider.css'
import './styles/ion.rangeSlider.skinFlat.css'
import './styles/jquerysctipttop.css'
import './styles/linearicons.css'
import './styles/magnific-popup.css'
import './styles/main.css'
import './styles/nice-select.css'
import './styles/nouislider.min.css'
import './styles/owl.carousel.css'
import './styles/themify-icons.css'

/*** IMPORT JAVASCRIPT ***/
import './statics/jquery-3.4.1.min.js'
import './statics/vendor/bootstrap.min.js'
import './statics/jquery.ajaxchimp.min.js'
import './statics/jquery.nice-select.min.js'
import './statics/jquery.sticky.js'
import './statics/nouislider.min.js'
import './statics/countdown.js'
import './statics/owl.carousel.js'
import './statics/main.js'

/*** IMPORTS APLICATION ***/
import Menu from './components/mainMenu/Menu.js'  

class App extends Component{
  
  constructor(){
    super()
    this.state = {}
  }

  render() {
    return (
      <Menu></Menu>
    )
  }
}

export default App;
