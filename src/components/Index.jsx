import React from "react";
import Testimonial from "./Common/Testimonial";
import LatestBlogs from "./Common/LatestBlogs";
import PopularProduct from "./Common/PopularProducts";
import ServicesVT from "./ServicesVT";
import PopularServices from "./Common/PopularServices";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      {/* About start */}

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            {/* Left Side: Image */}
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img
                className="img-fluid rounded w-100 wow zoomIn"
                data-wow-delay="0.1s"
                src="img/num.jpeg"
                alt="About Us"
                style={{ maxHeight: "400px", objectFit: "cover" }} // Adjust height to match text
              />
            </div>

            {/* Right Side: Content */}
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h5 className="section-title ff-secondary text-start text-primary fw-normal">
                About Us
              </h5>
              <h1 className="mb-4">
                Welcome to <i className="fa-moon text-primary me-2"></i>
                astrology.in
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet
                lorem sit.
              </p>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet.
              </p>

              {/* Stats Section */}
              <div className="row g-4 mb-4">
                <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      15
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </div>
                {/* <div className="col-sm-6">
                  <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                    <h1
                      className="flex-shrink-0 display-5 text-primary mb-0"
                      data-toggle="counter-up"
                    >
                      50
                    </h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </div> */}
              </div>

              {/* Read More Button */}
              <Link to="/about-us" className="btn btn-primary py-3 px-5 mt-2">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Menu start */}
      {/* <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">

                        <h1
                            className="section-title ff-secondary text-center text-primary fw-normal">Most popuarl Products</h1>
                    </div>
                    <div className="tab-className text-center wow fadeInUp" data-wow-delay="0.1s">

                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt=""
                                                style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Astrology product1</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                    diam</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-2.jpg" alt=""
                                                style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Astrology product2</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                    diam</small>

                                            </div>
                                        </div>
                                        <button type="button" class="btn btn-primary">Primary</button>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="d-flex align-items-center">
                                            <img className="flex-shrink-0 img-fluid rounded" src="img/menu-3.jpg" alt=""
                                                style={{ width: '80px' }} />
                                            <div className="w-100 d-flex flex-column text-start ps-4">
                                                <h5 className="d-flex justify-content-between border-bottom pb-2">
                                                    <span>Astrology product3</span>
                                                    <span className="text-primary">$115</span>
                                                </h5>
                                                <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo
                                                    diam</small>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}

      <PopularProduct></PopularProduct>

      {/* Menu End */}

      {/*  Reservation Start */}
      <div
        className="container-xxl py-5 px-0 wow fadeInUp"
        data-wow-delay="0.1s">
        <div className="row g-0">
          {/* Left Side: Image */}
          <div className="col-md-6">
            <div
              className="image-container"
              style={{ height: "350px", overflow: "hidden" }}
            >
              <img
                src="img/vas.jpeg"
                alt="Image"
                className="w-100 h-100"
                style={{ objectFit: "cover" }} // Ensures the image fits nicely
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div
            className="col-md-6 bg-dark d-flex align-items-center"
            style={{ height: "350px" }}>
            <div className="p-4 wow fadeInUp w-100" data-wow-delay="0.2s">

              <h1 className="text-white mb-3">Book An Appointment</h1>
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="datetime"
                        placeholder="Date & Time"
                      />
                      <label htmlFor="datetime">Date & Time</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="number"
                        placeholder="Your Number"
                      />
                      <label htmlFor="number">Your Number</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Special Request"
                        id="message"
                        style={{ height: "80px" }}
                      ></textarea>
                      <label htmlFor="message">Special Request</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button
                      className="btn btn-primary w-100 py-2"
                      type="submit"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/*  Reservation Start  */}

      {/*  our services Start*/}
      <PopularServices></PopularServices>
      {/*  our services end*/}

      {/* BLOCK Start |*/}

      {/* BLOCK END |*/}
      <ServicesVT></ServicesVT>
      <Testimonial></Testimonial>
      <LatestBlogs></LatestBlogs>

    </>
  );
};

export default Index;
