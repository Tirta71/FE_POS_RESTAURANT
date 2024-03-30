import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="ft-top text-center text-md-left">
        <div className="container">
          <div className="ft-top-wrapper style">
            <div className="row">
              <div className="col-md-6 col-lg-3 ft-col">
                <a href="index.html">
                  <img src="images/logo.png" alt="" />
                </a>
                <p className="style">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusan-tium doloremque laudantium, totam rem aperiam,
                </p>

                <div className="social">
                  <a href="#">
                    <i className="zmdi zmdi-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-facebook-box"></i>
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="zmdi zmdi-instagram"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ft-col mt-51 pl-64">
                <h6>Address</h6>

                <div className="contact-part">
                  <div className="contact-line">
                    <span className="lnr lnr-home"></span>
                    <span>No 40 Baria Sreet 133/2</span>
                  </div>
                  <div className="contact-line">
                    <a href="tel:+15618003666666">
                      <span className="lnr lnr-phone-handset"></span>
                      <span> + (156) 1800-366-6666</span>
                    </a>
                  </div>
                  <div className="contact-line">
                    <a href="#">
                      <span className="lnr lnr-envelope"></span>
                      <span> Eric-82@example.com</span>
                    </a>
                  </div>
                  <div className="contact-line">
                    <a href="#">
                      <span className="lnr lnr-earth"></span>
                      <span> www.royate.com</span>
                    </a>
                  </div>
                  <div className="contact-line">
                    <span className="lnr lnr-clock"></span>
                    <span>Mon - Sat: 7AM - 10PM</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ft-col mt-51 pl-50">
                <h6>Latest post</h6>
                <div className="latest-post">
                  <div className="post-row">
                    <span className="">15.07.2018</span>
                    <h6>
                      <a href="blog-single.html">At vero eos et accusamus</a>
                    </h6>
                  </div>
                  <div className="post-row">
                    <span className="">14.07.2018</span>
                    <h6>
                      <a href="blog-single.html">Ut enim ad minima veniam</a>
                    </h6>
                  </div>
                  <div className="post-row">
                    <span className="">13.07.2018</span>
                    <h6 className="mb-0">
                      <a href="blog-single.html">Nor again is there anyone</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 ft-col mt-51 pl-30">
                <h6 className="mb-33">Find us</h6>

                <div
                  className="js-google-map"
                  data-makericon="images/map-marker.png"
                  data-makers='[["Royate", "Now that you visited our website,<br> how about checking out our office too?", 40.715681, -74.003427]]'
                >
                  <div
                    className="map__holder js-map-holder map-holder"
                    id="map"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ft-bot">
        <div className="container">@ 2018 DesignGalaxy8. Get The Theme</div>
      </div>
    </footer>
  );
}
