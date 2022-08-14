import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import 'aos/dist/aos.css';
import './css/style.css';

import AOS from 'aos';

import Home from './pages/Home';
import Apply from './pages/Apply';
import About from './pages/About';

/**
 * TODO:
 * - Bind form to emailjs [Done]
 *  - Send copy to own email [Done]
 *  - Show a confirmation before sending! [TODO]
 *  - Check if there can be attatchments!!?!? [Not needed]
 * - Fill in a simple about us [TODO]
 * 
 */

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/rtd-fa" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/rtd-fa/about" element={<About />} />
        <Route path="/rtd-fa/apply" element={<Apply />} />
      </Routes>
    </>
  );
}

export default App;
