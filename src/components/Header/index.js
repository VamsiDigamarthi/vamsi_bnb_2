import {RiGlobalLine} from 'react-icons/ri'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoIosContact} from 'react-icons/io'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-container">
      <img
        className="logo-image"
        src="https://media.designrush.com/inspiration_images/135187/conversions/_1511452487_364_Airbnb-mobile.jpg"
        alt="logo"
      />
      <div className="nav-right-card">
        <p>Become a host</p>
        <RiGlobalLine />
        <div className="nav-ham-icon-card">
          <GiHamburgerMenu />
          <IoIosContact />
        </div>
      </div>
    </nav>
    <hr />
  </>
)

export default Header
