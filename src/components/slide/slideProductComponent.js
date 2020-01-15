import React from 'react'
import Slider from 'react-slick'
import img1 from '../../_assets/img/category/img1.jpg'
import img2 from '../../_assets/img/category/img2.jpg'

const SlideProductComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="col-lg-4 col-8">
            <div className="s_Product_carousel">
                <Slider {...settings}>
                    <div className="single-prd-item">
                        <img className="img-fluid" src={img1} alt="img-1" />
                    </div>

                    <div className="single-prd-item">
                        <img className="img-fluid" src={img2} alt="img-2" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default SlideProductComponent