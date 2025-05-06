import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import Counts from '../components/Counts'
import Aboutsection from '../components/Aboutsection'

import OurAchivements from '../components/OurAchivements'
import OurService from '../components/OurService'
import LatestNews from '../components/LatestNews'
import EventGallery from '../components/EventGallery'
import ClientTestimonial from '../components/ClientTestimonial'
import OurEventProcess from '../components/OurEventProcess'
import Subscrib from '../components/Subscrib'
function Home() {
  return (
    <div>
        <Nav/>
        <Banner/>
        <Counts/>
        <Aboutsection/>
        <OurService/>
        <OurAchivements/>
        <LatestNews/>
        <EventGallery/>
        <ClientTestimonial/>
        <OurEventProcess/>
        <Subscrib/>
    
        <Footer/>
    </div>
  )
}

export default Home