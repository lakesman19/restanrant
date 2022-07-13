import React from 'react'
import menuimg from '../Images/menuimg.png'
import Subheading from '../Subheading'
import{ wines, cocktails} from '../Homepage/Data.js'
import MenuItem from './Menuitems.js'
import './Menu.css' 


const Menu = () => {
  // console.log(wines);
  return (
  <div className='app__specialMenu flex__center section__padding'>
        <div className="app__specialMenu-title">
        <Subheading title="Menu that fits your palatte" style={{color:'white'}}/>
        <h1 className="headtext__cormorant">Today&apos;s Special</h1>
      </div>

       <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">Wine&Beer</p>
        <div className="app__specialMenu_menu_items">

          {/* {Data} */}
            {wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
        </div>
        </div>

        <div className="app__specialMenu-menu_img">
        <img src={menuimg} alt="menu__img" />
        </div>


        <div className="app__specialMenu-menu_cocktails  flex__center">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>
    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div>
    </div>
  ) 
}

export default Menu