import { React, useState} from 'react'
import Logo from '../Components/Images/Gerícht.png' 
import { FaAlignLeft, FaTimes} from "react-icons/fa";
// import { IconName } from "react-icons/fa";

import '../Components/Header.css' 

const Header = () => {
     const [toggle, setToggle] = useState(false)
  return (
        <nav>
            <div className="logo">
              <img src={Logo} alt="app Logo" />
            </div>
            <div className="navmenu">
                <ul>
                    <li className="link"><link to="" ></link>home</li>
                    <li className="link"><link to="" ></link>pages</li>
                    <li className="link"><link to="" ></link>contact </li>
                    <li className="link"><link to="" ></link>blog</li>
                    <li className="link"><link to="" ></link>landing</li>
                </ul>
            </div>
            <div className="signup">
               <a href="" className="login">
                log in /registrtion
                </a>
                <div />
                <a href=""className="login">
                book table
                </a> 
            </div>
            <div className="small-screen">
            <FaAlignLeft color='#fff' fontSize={27} onClick={() => {setToggle(true)}} />
            {toggle && (
                <div className="smallnavmenu">
                    <FaTimes className='close' onClick={() =>{setToggle(false)}}/> 
                    <ul>
                        <li className="link"><link to="" ></link>home</li>
                        <li className="link"><link to="" ></link>pages</li>
                        <li className="link"><link to="" ></link>contact us </li>
                        <li className="link"><link to="" ></link>blog</li>
                        <li className="link"><link to="" ></link>landing</li>
                    </ul>
                </div>
            )}
              </div>
        </nav> 
  )
}   

export default Header