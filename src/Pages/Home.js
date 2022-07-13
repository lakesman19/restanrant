import React from 'react'
import Hero from '../Components/Homepage/Hero'
import AboutUs from '../Components/Homepage/AboutUs'
import Menu from '../Components/Homepage/Menu'
import ChefWord from '../Components/Homepage/ChefWord'
// import Subheading from '../Components/Subheading'
import Awards from '../Components/Homepage/Awards'
import Gallery from '../Components/Homepage/Gallery'
import FindUs from '../Components/Homepage/Find'
// import Video from '../Components/Homepage/Video.js'

const Home = () => {
  return (
    <div>
        <Hero/>
        <AboutUs />
        <Menu  />
        <ChefWord/>
         {/* <Video /> */}
         <Awards/>
         <Gallery/>
         <FindUs/>
    </div>
  )
}

export default Home