import React from 'react'
import Slider from 'react-slick'

const SlideProductComponent = props => {
    const { images } = props
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
                    {
                        images.media.map(image => (
                            <div className="single-prd-item">
                                <img className="img-fluid" alt="img-1" src={image} />
                            </div>
                        ))

                    }
                </Slider>
            </div>
        </div>
    );
}

export default SlideProductComponent