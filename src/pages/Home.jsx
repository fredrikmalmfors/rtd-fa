import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import FeaturesHome from '../partials/Features';
import Testimonials from '../partials/Testimonials';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-oscar">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow text-white">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;