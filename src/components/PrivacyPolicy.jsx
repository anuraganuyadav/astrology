import React from "react";
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';
import ServicesVT from "./ServicesVT";
import { Link } from "react-router-dom";
// import styles from ".../../css/termscondition.module.css";

function PrivacyPolicy() {

    return (
        <>
            <Navbar></Navbar>
            <div className="container-xxl position-relative p-0">
                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container text-center my-5 pt-5 pb-4">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Privacy Policy</h1>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb justify-content-center text-uppercase">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>

                                <li className="breadcrumb-item text-white active" aria-current="page">Privacy Policy</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>

            <section className="">
                <div
                    className="content-area recent-property padding-top-40"
                    style={{ backgroundColor: "#FFF" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="serviceLeadingSection">
                                <h4>
                                    <span className="sn blue">1.</span>
                                    <span className="st blue">Our services</span>
                                </h4>

                                <div className="serviceInfoContainer">
                                    <h6 className="serviceLead">Some service info</h6>
                                    <p className="serviceDetails">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Dolores reiciendis eaque itaque facere quidem tenetur
                                        impedit nobis eum. Consequatur dignissimos aliquam accusamus
                                        magnam aliquid laboriosam, neque incidunt quia voluptatem
                                        ducimus?
                                    </p>
                                    <div className="secionLine lineColorBlue"></div>
                                </div>
                                {/* Repeat serviceInfoContainer as needed */}
                            </div>

                            <div className="serviceLeadingSection">
                                <h4>
                                    <span className="sn orange">2.</span>
                                    <span className="st orange">Lorem ipsum</span>
                                </h4>

                                <div className="serviceInfoContainer">
                                    <h6 className="serviceLead">Some service info</h6>
                                    <p className="serviceDetails">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Perferendis repellendus rem quas eius, deleniti quos
                                        pariatur earum nihil voluptate inventore vel atque possimus
                                        labore laborum, reprehenderit maxime, placeat quo corrupti.
                                    </p>
                                    <div className="secionLine lineColorOrange"></div>
                                </div>
                                {/* Repeat serviceInfoContainer as needed */}
                            </div>

                            <div className="serviceLeadingSection">
                                <h4>
                                    <span className="sn lightGreen">3.</span>
                                    <span className="st lightGreen">Lorem ipsum</span>
                                </h4>

                                <div className="serviceInfoContainer">
                                    <h6 className="serviceLead">Some service info</h6>
                                    <p className="serviceDetails">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Perferendis repellendus rem quas eius, deleniti quos
                                        pariatur earum nihil voluptate inventore vel atque possimus
                                        labore laborum, reprehenderit maxime, placeat quo corrupti.
                                    </p>
                                    <div className="secionLine lineColorGreen"></div>
                                </div>
                                {/* Repeat serviceInfoContainer as needed */}
                            </div>

                            <div className="serviceLeadingSection">
                                <h4>
                                    <span className="sn purple">4.</span>
                                    <span className="st purple">Lorem ipsum</span>
                                </h4>

                                <div className="serviceInfoContainer">
                                    <h6 className="serviceLead">Some service info</h6>
                                    <p className="serviceDetails">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Perferendis repellendus rem quas eius, deleniti quos
                                        pariatur earum nihil voluptate inventore vel atque possimus
                                        labore laborum, reprehenderit maxime, placeat quo corrupti.
                                    </p>
                                    <div className="secionLine lineColorPurple"></div>
                                </div>
                                {/* Repeat serviceInfoContainer as needed */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ServicesVT></ServicesVT>
            <Footer></Footer>
        </>
    );
}

export default PrivacyPolicy;
