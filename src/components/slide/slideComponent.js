import React from 'react'
import { connect } from 'react-redux'
import Slider from 'react-slick'
import SlidesContainer from '../../funcionalities/slides/main/containers/slide.container'
import { Link } from 'react-router-dom'
import { addProduct } from '../../utils/cart/core/controllers/addProduct'

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
                                listingSlide.map((slide, index) => (
                                    <div className="active-banner-slider" key={index}>
                                        <div className="row single-slide align-items-center d-flex" >
                                            <div className="col-lg-5 col-md-6 col-6 col-sm-6">
                                                <div className="banner-content">

                                                    <Link to=
                                                        {`/item/${slide.categorie}/${slide.title.replace(/ /gi, "_")}/${slide.productId}`}
                                                        style={{ textDecoration: "none" }}>
                                                        <h2 className="text-center color-black">{slide.title}</h2>
                                                    </Link>
                                                    <br />
                                                    <p className="text-center">{slide.description}</p>
                                                    <div className="add-bag d-flex align-items-center justify-content-center">
                                                        <Link to="/cart">
                                                            <button type="submit" className="genric-btn success circle"
                                                                onClick={() => addProduct(slide)}>Compre Agora</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-4 col-4 col-sm-6 left-1 position_slide">
                                                <img className="size_image_slide" src={slide.link} alt={"foto-slide"} />
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
const mapStateToProps = store => ({listingSlide: store.mainSlide.listLinks})
export default connect(mapStateToProps)(Slide)