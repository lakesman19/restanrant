import React from 'react'
import G from '../Images/G.png'
import spoon from '../Images/spoon.png'
import knives from '../Images/knives.png'


import './AboutUs.css' 


const AboutUs = () => {
  return (
    <div className='app__aboutus app__bg flex__center section__padding'>
        <div className="app__aboutus-overlay flex__center">
            <img src={G} alt="" />
        </div> 
         <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
                <h1 className="headtext__cormorant">About Us</h1>
                <img src={spoon}  classNames="spoon__img" />
                <p  className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button className='custom__button' >know more</button>
            </div>

            <div className="app__aboutus-content_knife">
                <img src={knives} />
            </div>
            <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our history</h1>
                <img src={spoon}  classNames="spoon__img" />
                <p  className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button className='custom__button' >know more</button>
            </div>
         </div>
    </div>
  )
}

export default AboutUs