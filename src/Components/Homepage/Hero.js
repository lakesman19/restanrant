import React from 'react'
import Subheading from '../Subheading'
import Heroimg from '../Images/Hero-img.png'

import './Hero.css';


const Hero = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
        <div className="app__wrapper_info">
             <Subheading title="Chase the new Flavour"   />
             <h1 className='app__header-h1'>The key to Fine dining</h1>
             <p className="p__opensans " style={{margin:'2rem  0 '}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
             <button className='custom__button'>Explore Menu</button>
        </div>

        <div className="app__wrapper_img">
            <img src={Heroimg} alt=""  />
        </div>
    </div>
  )
}

export default Hero