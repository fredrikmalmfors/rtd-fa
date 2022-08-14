import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation,
  HashRouter,
  BrowserRouter
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

  // const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  // }, [location.pathname]); // triggered on route change

  return (
    <BrowserRouter basename='/rtd-fa'>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="apply" element={<Apply />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
