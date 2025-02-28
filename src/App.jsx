// import { useState } from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
// import Blogs from './components/Blogs';
// import AstroShopProduct from './components/AstroShopProduct';

// function App() {

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />} />
//         <Route path="/articles"
//           element={<Blogs />} />
//         <Route path="/astro-shop"
//           element={<AstroShopProduct />} />

//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Blogs from './components/Blogs';
import AstroShopProduct from './components/AstroShopProduct';
import ProductShopDetails from './components/ProductShopDetails';
import ProductCheckout from './components/ProductCheckout';
import ServicesDetails from './components/Common/ServicesDetails';
import DetailsBlogs from './components/DetailsBlogs';
import ContactUs from './components/ContactUs';
import TermsCondition from './components/TermsCondition';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutUs from './components/AboutUs';
// admin panel components
import AdminLayout from './components/Admin/AdminLayout';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* admin panel routes */}
        <Route path="/admin" element={<AdminLayout />} />
        {/* admin panel routes end */}
        <Route path="/" element={<Layout />} />
        <Route path="service-details/:category/:subcategory" element={<ServicesDetails />} />
        <Route path="/product-details" element={<ProductShopDetails />} />
        <Route path="/product-checkout" element={<ProductCheckout />} />
        <Route path="/articles" element={<Blogs />} />
        <Route path="/astro-shop" element={<AstroShopProduct />} />
        <Route path="/astro-shop/:category" element={<AstroShopProduct />} /> {/* Category-based route */}

        <Route path="/detail-blogs" element={<DetailsBlogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
