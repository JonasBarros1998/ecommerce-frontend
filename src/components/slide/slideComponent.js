import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import SlidesContainer from '../../funcionalities/slides/main/containers/slide.container'
import {Link} from 'react-router-dom'

//Configuração dos slides da pagina
const settings = () => {
    return {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
}

const Slide = props => {

    const { listingSlide } = props

    return (<>
        <SlidesContainer />
        <section className="banner-area">
            <div className="container container_size">
                <div className="row fullscreen align-items-center justify-content-start">

                    <div className="col-lg-12 clear_margin">
                        <Slider {...settings}>
                            {
                                listingSlide.map((linkItem, index) => (<div className="active-banner-slider" key={index}>
                                    <div className="row single-slide align-items-center d-flex" >
                                        <div className="col-lg-5 col-md-6 col-6 col-sm-6">
                                            <div className="banner-content">
                                                <h2>smartwatch Apple</h2>
                                                <br />
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                            incididunt ut labore et	dolore magna aliqua. Ut enim
                                                            ad minim veniam, quis nostrud exercitation.</p>
                                                <div className="add-bag d-flex align-items-center">
                                                    <Link to="/register">
                                                    <button type="submit" className="genric-btn success circle">Compre Agora</button>
                                                    </Link>
                                               
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-5 col-md-6 col-6 col-sm-6 left-1 position_slide">
                                            <img className="size_image_slide" src={linkItem} alt={"foto-slide"} />
                                        </div>
                                    </div>
                                </div>)
                                )
                            }

                        </Slider>
                    </div>

                </div>
            </div>
        </section>
    </>
    )
}

const mapStateToProps = store => {
    return {
        listingSlide: store.mainSlide.listLinks
    }
}

export default connect(mapStateToProps)(Slide)