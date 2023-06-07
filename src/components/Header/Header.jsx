import React from 'react'
import './Header.css'
import Logo from '../../assets/Thify-logo.png'
import Bars from '../../assets/bars.png'
import {Link} from "react-scroll";
import { useState } from 'react'

const Header = () => {
  
  const mobile = window.innerWidth<=768 ? true: false;
  const [menuOpened, setMenuOpened] = useState(false) 

  return (
    <div className="header">              
      <img src={Logo}  alt="" className='logo' />
      {(menuOpened===false && mobile===true)?(
        <div
        style={{
          backgroundColor: 'var(--appColor)', 
          padding: '0.5rem',
          marginRight: '-1rem',
          marginTop: '0.6rem',
          borderRadius:'7px',
        }}

        onClick={() => setMenuOpened(true)}

        >
          <img src={Bars} alt="" style={{width:'2rem', height:'2rem'}}/>
        </div>
      ) : ( 
        <ul className='header-menu'>
          <li>
            <Link
              onClick={()=>setMenuOpened(false)}
              to='hero'
              span={true}
              smooth={true}
              >Home
            </Link>
          </li>
          <li>
            <Link
              onClick={()=>setMenuOpened(false)}
              to='programs'
              span={true}
              smooth={true}          
              >Programs
            </Link>
          </li>
          <li onClick={()=>setMenuOpened(false)}>Why us</li>
          <li>
            <Link
              onClick={()=>setMenuOpened(false)}
              to='plans'
              span={true}
              smooth={true}          
              >Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={()=>setMenuOpened(false)}
              to='testimonials'
              span={true}
              smooth={true}
              >Testimonial
            </Link>
          </li>
        </ul>
      )} 
      <button className='btn btn-header'>Join Now</button>
    </div>
  );
};

export default Header