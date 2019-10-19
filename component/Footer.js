import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer
                className="page-footer font-small unique-color-dark mt-5 pt-3"
                style={{ background: '#212121', color: '#fff' }}
            >
                {/* Footer Links */}
                <div className="container text-center text-md-left mt-5">
                    {/* Grid row */}
                    <div className="row mt-3">
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* Content */}
                            <h6 className="text-uppercase font-weight-bold">Company name</h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px' }}
                            />
                            <p>
                                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase font-weight-bold">Products</h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px' }}
                            />
                            <p>
                                <a href="#!">MDBootstrap</a>
                            </p>
                            <p>
                                <a href="#!">MDWordPress</a>
                            </p>
                            <p>
                                <a href="#!">BrandFlow</a>
                            </p>
                            <p>
                                <a href="#!">Bootstrap Angular</a>
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px' }}
                            />
                            <p>
                                <a href="#!">Your Account</a>
                            </p>
                            <p>
                                <a href="#!">Become an Affiliate</a>
                            </p>
                            <p>
                                <a href="#!">Shipping Rates</a>
                            </p>
                            <p>
                                <a href="#!">Help</a>
                            </p>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* Links */}
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr
                                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                                style={{ width: '60px' }}
                            />
                            <p>
                                <i className="fas fa-home mr-3" /> New York, NY 10012, US
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3" /> info@example.com
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <i className="fas fa-print mr-3" /> + 01 234 567 89
                            </p>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
                {/* Footer Links */}
                {/* Copyright */}
                <div className="footer-copyright text-center py-3" style={{ background: '#000' }}>
                    © 2018 Copyright:
                    <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
                </div>
                {/* Copyright */}
            </footer>
        )
    }
}

export default Footer
