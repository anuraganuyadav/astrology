import React, { useState } from 'react';
import Navbar from './Navbar';
import HeaderEnquery from '../Modal/HeaderEnquery'; // Import the modal component

const Header = () => {
    const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

    // Handle Enquiry modal open
    const handleEnqueryClick = () => {
        setEnqueryModalOpen(true); // Open modal on button click
    };

    // Handle Enquiry modal close
    const handleEnqueryCloseModal = () => {
        setEnqueryModalOpen(false); // Close modal
    };

    return (
        <>
            {/* Navbar & Hero start */}
            <div className="container-xxl position-relative p-0">
                <Navbar />

                <div className="container-xxl py-5 bg-dark hero-header mb-5">
                    <div className="container my-5 py-5">
                        <div className="row align-items-center g-5">
                            <div className="col-lg-6 text-center text-lg-start">
                                <h1 className="display-3 text-white animated slideInLeft">Welcome<br />Astrology</h1>
                                <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam
                                    dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed
                                    stet lorem sit clita duo justo magna dolore erat amet</p>

                                {/* Updated button to trigger the modal */}
                                <button
                                    className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft"
                                    onClick={handleEnqueryClick}
                                >
                                    Book A Appointment
                                </button>
                            </div>
                            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img className="img-fluid" src="img/heroimg.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar & Hero End */}

            {/* Conditionally render the modal */}
            {isEnqueryModalOpen && <HeaderEnquery onClose={handleEnqueryCloseModal} />}
        </>
    );
};

export default Header;

