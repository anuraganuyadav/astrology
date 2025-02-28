// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import HeaderEnquery from '../Modal/HeaderEnquery';
// import CommonEnquery from './CommonEnquery';


// const Navbar = () => {

//     const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

//     // Handle Enquiry modal open
//     const handleEnqueryClick = () => {
//         setEnqueryModalOpen(true);
//     };

//     // Handle Enquiry modal close
//     const handleEnqueryCloseModal = () => {
//         setEnqueryModalOpen(false);
//     };

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
//                 <a href="" className="navbar-brand p-0">
//                     <h1 className="text-primary m-0">astrology.in</h1>
//                 </a>
//                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//                     <span className="fa fa-bars"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarCollapse">
//                     <div className="navbar-nav ms-auto py-0 pe-4">
//                         <Link to="/" className="nav-item nav-link active">ASTRO V.T</Link>



//                         <div className="nav-item dropdown">
//                             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Astrology</a>
//                             <div className="dropdown-menu m-0">
//                                 <Link to={`/service-details/astrology/match-making`} className="dropdown-item">Match Making</Link>
//                             </div>
//                         </div>

//                         <div className="nav-item dropdown">
//                             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Numerology</a>
//                             <div className="dropdown-menu m-0">
//                                 <Link to={`/service-details/numerology/love-compalition`} className="dropdown-item">Love Compalition</Link>
//                                 <Link to={`/service-details/numerology/business`} className="dropdown-item">Business</Link>
//                                 <Link to={`/service-details/numerology/career-education`} className="dropdown-item">Career & Education</Link>
//                                 <Link to={`/service-details/numerology/name-change`} className="dropdown-item">Name Change</Link>
//                             </div>
//                         </div>

//                         <div className="nav-item dropdown">
//                             <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Vastu</a>
//                             <div className="dropdown-menu m-0">
//                                 <Link to={`/service-details/vastu/vast-home`} className="dropdown-item">Vastu for Home</Link>
//                                 <Link to={`/service-details/vastu/vastu-Office`} className="dropdown-item">Vastu for Office</Link>
//                             </div>
//                         </div>



//                         <div className="nav-item dropdown">
//                             <Link to="/astro-shop" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">AstroShop</Link>
//                             <div className="dropdown-menu m-0">
//                                 <Link to="/astro-shop/gemstones" className="dropdown-item">
//                                     Gemstones/नवरत्न
//                                 </Link>
//                                 <Link to="/astro-shop/bracelets" className="dropdown-item">
//                                     Bracelets/ब्रेसलेट्स
//                                 </Link>
//                                 <Link to="/astro-shop/crystal" className="dropdown-item">
//                                     Crystal/स्फटिक
//                                 </Link>
//                                 <Link to="/astro-shop/conch" className="dropdown-item">
//                                     Conch/शंख
//                                 </Link>
//                             </div>
//                         </div>

//                         <a href="#" className="nav-item nav-link">Contact</a> {/* Open modal on click */}
//                     </div>
//                     <a href="#" className="btn btn-primary py-2 px-4" onClick={handleEnqueryClick}>Book A Appointment</a>
//                 </div>
//             </nav>

//             {/* Only show modal if it's open */}
//             {isEnqueryModalOpen && <HeaderEnquery onClose={handleEnqueryCloseModal} />}

//             <CommonEnquery onEnqueryClick={handleEnqueryClick} /> {/* Pass function to CommonEnquery */}
//         </>
//     );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderEnquery from '../Modal/HeaderEnquery';
import CommonEnquery from './CommonEnquery';
import useScrollToTop from './useScrollToTop'; // Import the custom hook

const Navbar = () => {

    const [isEnqueryModalOpen, setEnqueryModalOpen] = useState(false); // Track modal state

    // Handle Enquiry modal open
    const handleEnqueryClick = () => {
        setEnqueryModalOpen(true); // Open the enquiry modal
    };

    // Handle Enquiry modal close
    const handleEnqueryCloseModal = () => {
        setEnqueryModalOpen(false); // Close the enquiry modal
    };

    // Use the custom hook to scroll to top on page load or action
    useScrollToTop();  // Scrolls to top on route change

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <Link to="/" className="navbar-brand p-0">
                    <h1 className="text-primary m-0">astrology.in</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to="/" className="nav-item nav-link active">ASTRO V.T</Link>



                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Astrology</a>
                            <div className="dropdown-menu m-0">
                                <Link to={`/service-details/astrology/match-making`} className="dropdown-item">Match Making</Link>
                                <Link to={`/service-details/astrology/health-consultation`} className="dropdown-item">Health</Link>
                            </div>
                        </div>

                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Numerology</a>
                            <div className="dropdown-menu m-0">
                                <Link to={`/service-details/numerology/love-compalition`} className="dropdown-item">Love Compalition</Link>
                                <Link to={`/service-details/numerology/business`} className="dropdown-item">Business</Link>
                                <Link to={`/service-details/numerology/career-education`} className="dropdown-item">Career & Education</Link>
                                <Link to={`/service-details/numerology/name-change`} className="dropdown-item">Name Change</Link>
                            </div>
                        </div>

                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Vastu</a>
                            <div className="dropdown-menu m-0">
                                <Link to={`/service-details/vastu/vast-home`} className="dropdown-item">Vastu for Home</Link>
                                <Link to={`/service-details/vastu/vastu-Office`} className="dropdown-item">Vastu for Office</Link>
                            </div>
                        </div>



                        <div className="nav-item dropdown">
                            <Link to="/astro-shop" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">AstroShop</Link>
                            <div className="dropdown-menu m-0">
                                <Link to="/astro-shop/gemstones" className="dropdown-item">
                                    Gemstones/नवरत्न
                                </Link>
                                <Link to="/astro-shop/bracelets" className="dropdown-item">
                                    Bracelets/ब्रेसलेट्स
                                </Link>
                                <Link to="/astro-shop/crystal" className="dropdown-item">
                                    Crystal/स्फटिक
                                </Link>
                                <Link to="/astro-shop/conch" className="dropdown-item">
                                    Conch/शंख
                                </Link>
                            </div>
                        </div>

                        <Link to ="/contact-us" className="nav-item nav-link">Contact</Link> {/* Open modal on click */}
                    </div>
                    <a href="#" className="btn btn-primary py-2 px-4" onClick={handleEnqueryClick}>Book A Appointment</a>
                </div>
            </nav>

            {/* Only show modal if it's open */}
            {isEnqueryModalOpen && <HeaderEnquery onClose={handleEnqueryCloseModal} />}

            <CommonEnquery onEnqueryClick={handleEnqueryClick} /> {/* Pass function to CommonEnquery */}
        </>
    );
};

export default Navbar;
