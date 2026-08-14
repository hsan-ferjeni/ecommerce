import React, { useEffect } from "react";
import AppBar from './components/appbar/AppBar'
import Hero from './components/hero/Hero'
import Products from './components/Products/Products'
import TopProducts from "./components/topProducts/TopProducts";
import Banner from "./components/banner/Banner";
import Subscribe from "./components/subscribe/Subscribe";
import Testimonials from "./components/testimonials/Testimonials"
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";


const App = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <AppBar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App