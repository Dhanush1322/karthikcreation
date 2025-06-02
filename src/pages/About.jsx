import React from 'react'

import AboutBanner from '../components/AboutBanner'
import AboutDirectors from '../components/AboutDirectors'

import OurCompanycuture from '../components/OurCompanycuture'
import Legacy from '../components/Legacy'
import AboutVission from '../components/AboutVission'
import OurCore from '../components/OurCore'

function About() {
  return (
    <div>

      <AboutBanner />
      <AboutDirectors />

      <OurCompanycuture />
      <Legacy />
      <AboutVission />
      <OurCore />
      
    </div>
  )
}

export default About