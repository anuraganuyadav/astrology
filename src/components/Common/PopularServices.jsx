import React from 'react'
import styles from "../css/popularservices.module.css";
const PopularServices = () => {
	return (
		<>
			<div className="container-xxl pt-5 pb-3">
				<div className="container">
					<div>
						<h2 className={`${styles.popularserviceheading} text-center`}>Our Services</h2>
						<p className='container'>
							As the name indicates, Temples Hub one stop solution provider for all your pilgrimage/ temple tour needs. We provide unmatched temples tour packages like Chardham Packages, South India Temple Tours, Ooty Tours etc. Find our most popular packages below and book as per your choice.
						</p>
					</div>
					<div className="row g-4">
						<div
							className="col-lg-3 col-md-6 wow fadeInUp"
							data-wow-delay="0.1s"
						>
							<div className="team-item text-center rounded overflow-hidden">
								<div className="rounded-circle overflow-hidden m-4">
									<img className="img-fluid" src="img/astrology.webp" alt="" />
								</div>
								<h5 className="mb-0"> Astrology</h5>

								<div className="d-flex justify-content-center mt-3">
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-twitter"></i>
									</a>
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-instagram"></i>
									</a>
								</div>
							</div>
						</div>

						<div
							className="col-lg-3 col-md-6 wow fadeInUp"
							data-wow-delay="0.7s"
						>
							<div className="team-item text-center rounded overflow-hidden">
								<div className="rounded-circle overflow-hidden m-4">
									<img className="img-fluid" src="img/vas.jpeg" alt="" />
								</div>
								<h5 className="mb-0">Vastu-Sastra</h5>

								<div className="d-flex justify-content-center mt-3">
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-twitter"></i>
									</a>
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-instagram"></i>
									</a>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-md-6 wow fadeInUp"
							data-wow-delay="0.3s"
						>
							<div className="team-item text-center rounded overflow-hidden">
								<div className="rounded-circle overflow-hidden m-4">
									<img className="img-fluid" src="img/num.jpeg" alt="" />
								</div>
								<h5 className="mb-0"> Numerology</h5>

								<div className="d-flex justify-content-center mt-3">
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-twitter"></i>
									</a>
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-instagram"></i>
									</a>
								</div>
							</div>
						</div>
						<div
							className="col-lg-3 col-md-6 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<div className="team-item text-center rounded overflow-hidden">
								<div className="rounded-circle overflow-hidden m-4">
									<img className="img-fluid" src="img/sp.jpeg" alt="" />
								</div>
								<h5 className="mb-0">Spiritual-Healing</h5>

								<div className="d-flex justify-content-center mt-3">
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-twitter"></i>
									</a>
									<a className="btn btn-square btn-primary mx-1" href="">
										<i className="fab fa-instagram"></i>
									</a>
								</div>
							</div>
						</div>
					
					</div>
				</div>
			</div>

		</>
	)
}

export default PopularServices