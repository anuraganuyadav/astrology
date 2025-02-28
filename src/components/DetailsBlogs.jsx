import React, { useState } from 'react';
import styles from './css/detailsblogs.module.css';
import Footer from './Common/Footer';
import Navbar from './Common/Navbar';

const DetailsBlogs = () => {
	return (
		<>
			<Navbar />
			<div className={`${styles.detailsblogbaneer} container-xxl py-5 bg-dark mb-5`}>
				<div className="container my-5 py-5">
					<div className="row align-items-center g-5">
						<div className="col-lg-6 text-center text-lg-start">
							{/* Add any content here if needed */}
						</div>
						<div className="col-lg-6 text-center text-lg-end overflow-hidden">
							<img className="img-fluid" src="img/heroimg.webp" alt="" />
						</div>
					</div>
				</div>
			</div>

			<section className={styles.sectionblogwrap}>
				<div>
					<h2 className={`${styles.articlesheading} text-center`}>Exploring the Enchanting Trifecta: Mysore, Ooty, and Coorg</h2>
					<p className="container">
						As the name indicates, Temples Hub one stop solution provider for all your pilgrimage/temple tour needs. We provide unmatched temple tour packages like Chardham Packages, South India Temple Tours, Ooty Tours, etc. Find our most popular packages below and book as per your choice.
					</p>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-lg-9">
							<div className="row">
								<div className="col-lg-12 mb-5">
									<div className="blog-item">
										<div className={`${styles.blogimg} mb-3`}>
											{/* Increase image size and keep it responsive */}
											<img className="img-fluid" src="img/num.jpeg" alt="Blog Image" />
										</div>
										<div className={styles.blogContent}>
											<div className="blog-item-meta mb-3 mt-4">
												<span className="text-muted text-capitalize mr-3"><i className="fa fa-eye" aria-hidden="true"></i>5</span>
												<div className={styles.blogsdate}>
													<span className="text-black text-capitalize mr-3"><i className="icofont-calendar mr-1"></i> 03 Mar 2018</span>
												</div>

											</div>
											<h3 className={`${styles.blogsname} mb-3`}>Exploring the Enchanting Trifecta: Mysore, Ooty, and Coorg</h3>
											<p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, debitis minima inventore odit eligendi quo error pariatur cumque ipsam a voluptatibus temporibus distinctio fuga eaque illum ut labore dicta delectus.</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-3">
							<div className="sidebar-wrap pl-lg-4 mt-5 mt-lg-0">
								<div className="sidebar-widget category mb-3">
									<h5 className="mb-4">Categories</h5>
									<ul className="list-unstyled">
										<li className="align-items-center"><a href="#">Astrology</a><span>(14)</span></li>
										<li className="align-items-center"><a href="#">Numerology</a><span>(2)</span></li>
										<li className="align-items-center"><a href="#">Spiritual-Healing</a><span>(14)</span></li>
										<li className="align-items-center"><a href="#">Vastu-Sastra</a><span>(2)</span></li>
										<li className="align-items-center"><a href="#">Meditation</a><span>(14)</span></li>
									</ul>
								</div>

								<div className="sidebar-widget latest-post mb-3">
									<h5>Related Articles</h5>
									<div className="py-2">
										<span className="text-sm text-muted">03 Mar 2018</span>
										<h6 className="my-2"><a href="#">Thoughtful living in Los Angeles</a></h6>
									</div>
									<div className="py-2">
										<span className="text-sm text-muted">03 Mar 2018</span>
										<h6 className="my-2"><a href="#">Thoughtful living in Los Angeles</a></h6>
									</div>
									<div className="py-2">
										<span className="text-sm text-muted">03 Mar 2018</span>
										<h6 className="my-2"><a href="#">Thoughtful living in Los Angeles</a></h6>
									</div>
									<div className="py-2">
										<span className="text-sm text-muted">03 Mar 2018</span>
										<h6 className="my-2"><a href="#">Thoughtful living in Los Angeles</a></h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default DetailsBlogs;
