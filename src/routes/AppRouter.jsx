import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/About';
import Product from '../pages/Product';
import ContactUs from '../pages/ContactUs';
import Enqiry from '../pages/Enqiry';
import Entertainment from '../pages/Entertainment';
import TopSpeed from '../pages/TopSpeed';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: '1600px', margin: '0 auto', overflowX: 'hidden' }}>

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Enqiry" element={<Enqiry />} />
          <Route path="/Entertainment" element={<Entertainment />} />
          <Route path="/TopSpeed" element={<TopSpeed />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;











// import React from 'react';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// import IntroVideo from '../pages/IntroVideo';
// import Home from '../pages/Home';
// import About from '../pages/About';
// import Product from '../pages/Product';
// import ContactUs from '../pages/ContactUs';
// import Enqiry from '../pages/Enqiry';
// import Entertainment from '../pages/Entertainment';
// import TopSpeed from '../pages/TopSpeed';
// import Nav from '../components/Nav';
// import Footer from '../components/Footer';

// const AppContent = () => {
//   const location = useLocation();
//   const hideLayout = location.pathname === '/'; // Hide on video page

//   return (
//     <div style={{ maxWidth: '1600px', margin: '0 auto', overflowX: 'hidden' }}>
//       {!hideLayout && <Nav />}
//       <Routes>
//         <Route path="/" element={<IntroVideo />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/About" element={<About />} />
//         <Route path="/Product" element={<Product />} />
//         <Route path="/ContactUs" element={<ContactUs />} />
//         <Route path="/Enqiry" element={<Enqiry />} />
//         <Route path="/Entertainment" element={<Entertainment />} />
//         <Route path="/TopSpeed" element={<TopSpeed />} />
//       </Routes>
//       {!hideLayout && <Footer />}
//     </div>
//   );
// };

// const AppRouter = () => (
//   <BrowserRouter>
//     <AppContent />
//   </BrowserRouter>
// );

// export default AppRouter;
