import React, { Component } from 'react'
import Slider from 'react-slick'
import sp1 from '../../../_assets/img/category/s-p1.jpg'

class SlideProductComponent extends Component {

    constructor() {
        super()
        this.settings = {}
    }

    configSlide() {
        this.settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }

    render() {
        return (
                <div className="s_Product_carousel">
                    <Slider {...this.settings}>
                        <div className="single-prd-item">
                            <img className="img-fluid" src={sp1} alt="img-1" />
                        </div>

                        <div className="single-prd-item">
                            <img className="img-fluid" src={sp1} alt="img-2" />
                        </div>

                        <div className="single-prd-item">
                            <img className="img-fluid" src={sp1} alt="img-3" />
                        </div>

                    </Slider>
            </div>
        );
    }
}

export default SlideProductComponent