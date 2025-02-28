// import React from 'react';
// import styles from '../css/latestblog.module.css';
// const LatestBlogs = () => {
//     return (
//         <>
//             {/* Latest Blog Start */}
//             <div className="container-xxl py-5">
//                 <div className="container">
//                     <div>
//                         <h2 className={`${styles.latestblogheading} text-center`}>Latest Articles</h2>
//                         <p className='container'>
//                             As the name indicates, Temples Hub one stop solution provider for all your pilgrimage/ temple tour needs. We provide unmatched temples tour packages like Chardham Packages, South India Temple Tours, Ooty Tours etc. Find our most popular packages below and book as per your choice.
//                         </p>
//                     </div>
//                     <div className="row g-4">
//                         {/* Blog Item 1 */}
//                         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
//                             <div className="service-item rounded pt-3">
//                                 <div className="p-4">
//                                     <div className="blog-image">
//                                         <img src="img/num.jpeg" alt="Master Chefs" className="img-fluid rounded" />
//                                     </div>
//                                     <h5>Article1</h5>
//                                     <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                                     <button type="button" className="btn btn-danger">Read More</button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Blog Item 2 */}
//                         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
//                             <div className="service-item rounded pt-3">
//                                 <div className="p-4">
//                                     <div className="blog-image">
//                                         <img src="img/vas.jpeg" alt="Quality Food" className="img-fluid rounded" />
//                                     </div>
//                                     <h5>Article12</h5>
//                                     <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                                     <button type="button" className="btn btn-danger">Read More</button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Blog Item 3 */}
//                         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
//                             <div className="service-item rounded pt-3">
//                                 <div className="p-4">
//                                     <div className="blog-image">
//                                         <img src="img/sp.jpeg" alt="Online Order" className="img-fluid rounded" />
//                                     </div>
//                                     <h5>Article1</h5>
//                                     <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                                     <button type="button" className="btn btn-danger">Read More</button>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Blog Item 4 */}
//                         <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
//                             <div className="service-item rounded pt-3">
//                                 <div className="p-4">
//                                     <div className="blog-image">
//                                         <img src="img/astrology.webp" alt="Online Order" className="img-fluid rounded" />
//                                     </div>
//                                     <h5>Article1</h5>
//                                     <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
//                                     <button type="button" className="btn btn-danger">Read More</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Latest Blog End */}
//         </>
//     );
// };

// export default LatestBlogs;


import React from 'react';
import styles from '../css/latestblog.module.css';
import blogs from '../js/blogsData';
import { Link } from 'react-router-dom';


const LatestBlogs = () => {
    // Filter out the active blogs
    const activeBlogs = blogs.filter(blog => blog.popular_article === "Active");

    return (
        <>
            {/* Latest Blog Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div>
                        <h2 className={`${styles.latestblogheading} text-center`}>Latest Articles</h2>
                        <p className='container'>
                            As the name indicates, Temples Hub is a one-stop solution provider for all your pilgrimage/temple tour needs. We provide unmatched temple tour packages like Chardham Packages, South India Temple Tours, Ooty Tours, etc. Find our most popular packages below and book as per your choice.
                        </p>
                    </div>
                    <div className="row g-4">
                        {/* Dynamically render active blogs */}
                        {activeBlogs.map((blog, index) => (
                            <div className="col-lg-4 col-sm-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`} key={blog.title}>
                                <div className=" rounded pt-3">
                                    <div className="p-4">
                                        <div className={styles['blog-image']}>
                                            <img src={blog.image} alt={blog.title} className="img-fluid rounded" />
                                        </div>
                                        <h5>{blog.title}</h5>
                                        <p>{blog.date}</p>
                                        <p>{blog.short_desc}</p>
                                        <Link to="/detail-blogs">
                                            <button type="button" className="btn btn-danger service-item">Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Latest Blog End */}
        </>
    );
};

export default LatestBlogs;
