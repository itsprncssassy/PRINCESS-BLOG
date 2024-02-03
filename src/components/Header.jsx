import React, { useState } from 'react'
import {Link} from "react-router-dom"
import Logo from '../images/MyLogo.png' 
import { IoClose } from "react-icons/io5";
import {HiOutlineBars4} from "react-icons/hi2" 



const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);
  
  const closeNavHandler = () => {
    if(window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true)
    }
  }


  return ( 
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__Logo' onClick={closeNavHandler}>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        {isNavShowing && <ul className="nav__menu">
          <li><Link to="profile/dsdd" onClick={closeNavHandler}>Princess Dacuma</Link></li> 
          <li><Link to="create" onClick={closeNavHandler}>Create Post</Link></li>
          <li><Link to="authors" onClick={closeNavHandler}>Authors</Link></li>
          <li><Link to="logout" onClick={closeNavHandler}>Logout</Link></li>
        </ul>}
        <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
          {isNavShowing ? <IoClose/> : <HiOutlineBars4/>}
        </button>
      </div>
    </nav>
  )
}

export default Header