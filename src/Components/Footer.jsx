import React from 'react'
import "./Footer.css"
export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
            <div className="row">


                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="footer-about">
                        <div className="footer-logo">
                            <a href="#"><img src="img/footer-logo.png" alt=""/></a>
                        </div>
                        <p>TalentConnect: Empowering Talent, Enabling Success.</p>
                        <a href="#"><img src="img/payment.png" alt=""/></a>
                    </div>
                </div>

                <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div className="footer-widget">
                        <h6>Explore</h6>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Trending Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sale</a></li>

                        </ul>
                    </div>
                </div>

                <div className="col-lg-2  col-md-3 col-sm-6">
                    <div className="footer-widget">
                        <h6>Links</h6>
                        <ul>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Return & Exchanges</a></li>

                        </ul>
                    </div>
                </div>

                <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div className="footer-widget">
                        <h6>NewsLetter</h6>
                        <div className="footer-newslatter">
                            <p>Be the first to discover exciting opportunities, exclusive insights, and updates on career tips, events, and more. Don’t miss out—unlock your potential with TalentConnect today!    </p>
                            <form action="#" className='footer-form'>
                                <input type="text" placeholder="Your Email"/>
                                <button type="submit"><span><i className="fa fa-envelope"
                                            arial-hidden="true"></i></span></button>
                            </form>
                        </div>

                    </div>
                </div>


            </div>

            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="footer-copyright-text">
                        <p>Copyright &copy; 2024 All rights reserved | <a href="#">TalentConnect</a></p>
                    </div>
                </div>
            </div>


        </div>

    </footer>
    </div>
  )
}
