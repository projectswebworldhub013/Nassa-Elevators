import React from 'react'
import HeroSection from '../Components/HeroSection'
import WhyChooseUs from '../Components/WhyChooseUs'
import OurStory from '../Components/OurStory'
import HowItWorks from '../Components/HowItWorks'
import MovingServices from '../Components/ElevatorServices'
import TeamSection from '../Components/TeamSection'
import SurfaceCollections from '../Components/SurfaceCollectinons'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <OurStory/>
      <HowItWorks/>
      <MovingServices/>
      <TeamSection/>
      <SurfaceCollections/>
      <WhyChooseUs/>
      
    </div>
  )
}

export default Home