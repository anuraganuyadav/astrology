import React from 'react'
import Navbar from './Common/Navbar'
import Footer from './Common/Footer'
import { Link } from 'react-router-dom'
import ServicesVT from './ServicesVT'

const AboutUs = () => {
	return (
		<>
			<Navbar></Navbar>
			<div class="container-xxl position-relative p-0">
				<div class="container-xxl py-5 bg-dark hero-header mb-5">
					<div class="container text-center my-5 pt-5 pb-4">
						<h1 class="display-3 text-white mb-3 animated slideInDown">About Us</h1>
						<nav aria-label="breadcrumb">
							<ol class="breadcrumb justify-content-center text-uppercase">
								<li class="breadcrumb-item"><Link to="/">Home</Link></li>

								<li class="breadcrumb-item text-white active" aria-current="page">About</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>


			<div class="container-xxl py-5">
				<div class="container">
					<div class="row g-5 align-items-center">
						<div className="col-lg-6 d-flex justify-content-center align-items-center">
							<img
								className="img-fluid rounded w-100 wow zoomIn"
								data-wow-delay="0.1s"
								src="img/num.jpeg"
								alt="About Us"
								style={{ maxHeight: "400px", objectFit: "cover" }} // Adjust height to match text
							/>
						</div>
						<div class="col-lg-6">
							<h5 class="section-title ff-secondary text-start text-primary fw-normal">About Us</h5>
							<h1 className="mb-4">
								Welcome to <i className="fa-moon text-primary me-2"></i>
								astrology.in
							</h1>
							<p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
							<p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
							<div class="row g-4 mb-4">
								<div class="col-sm-6">
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

							</div>

						</div>
					</div>
				</div>
			</div>
			<ServicesVT></ServicesVT>
			<Footer></Footer>
		</>
	)
}

export default AboutUs