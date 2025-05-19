import React from 'react'

import AboutBanner from '../components/AboutBanner'
import AboutDirectors from '../components/AboutDirectors'
import AboutTeam from '../components/AboutTeam'
import OurCompanycuture from '../components/OurCompanycuture'
import Legacy from '../components/Legacy'
import AboutVission from '../components/AboutVission'
import OurCore from '../components/OurCore'
import SpeakforthemselfeAbout from '../components/SpeakforthemselfeAbout'
function About() {
  return (
    <div>
   
        <AboutBanner/>
        <AboutDirectors/>
        <AboutTeam/>
        <OurCompanycuture/>
        <Legacy/>
        <AboutVission/>
        <OurCore/>
        <SpeakforthemselfeAbout/>
      
    </div>
  )
}

export default About