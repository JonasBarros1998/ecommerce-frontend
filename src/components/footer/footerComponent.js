import React from 'react'

const Footer = () => {
    return (
        <footer className="footer-area section_gap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>About Us</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>
                    </div>

                    <div className="col-lg-4  col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Newsletter</h6>
                            <p>Stay update with our latest</p>

                            <div className="" id="mc_embed_signup">

                                <form target="_blank" method="get" className="form-inline">

                                    <div className="d-flex flex-row">

                                        <input className="form-control" name="EMAIL" placeholder="Enter Email"
                                            required="" type="email" />

                                        <button className="click-btn btn btn-default">
                                            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                        </button>

                                    </div>
                                    <div className="info"></div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3  col-md-6 col-sm-6">
                        <div className="single-footer-widget mail-chimp">

                            <h6 className="mb-20">Instragram Feed</h6>

                            <ul className="instafeed d-flex flex-wrap">
                                <li><img src="img/i1.jpg" alt="" /></li>
                                <li><img src="img/i2.jpg" alt="" /></li>
                                <li><img src="img/i3.jpg" alt="" /></li>
                                <li><img src="img/i4.jpg" alt="" /></li>
                                <li><img src="img/i5.jpg" alt="" /></li>
                                <li><img src="img/i6.jpg" alt="" /></li>
                                <li><img src="img/i7.jpg" alt="" /></li>
                                <li><img src="img/i8.jpg" alt="" /></li>
                            </ul>

                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h6>Follow Us</h6>
                            <p>Let us be social</p>
                            <div className="footer-social d-flex align-items-center">
                                <a href={"block"}><i className="fa fa-facebook"></i></a>
                                <a href={"block"}><i className="fa fa-twitter"></i></a>
                                <a href={"block"}><i className="fa fa-dribbble"></i></a>
                                <a href={"block"}><i className="fa fa-behance"></i></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
                </div>
            </div>
        </footer>
    );
}

export default Footer
