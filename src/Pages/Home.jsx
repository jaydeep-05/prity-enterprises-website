import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import Carousel from '../Components/Carousel'
import AboutUs from '../Components/AboutUs'
import Product from '../Components/Product'
import ContactUs from '../Components/ContactUs'
const Home = () => {
  
  return (
    <>
    <Navbar/>
    <Carousel/>
    <AboutUs/>
    <Product/>
    <ContactUs />
    </>
  )
}

export default Home