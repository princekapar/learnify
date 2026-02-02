import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

import { Link } from 'react-scroll'

const Navbar = () => {

  const [sticky, setSticky] = useState(false)
  const [mobileMenu, setMobileMobile]=useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    mobileMenu ? setMobileMobile(false) : setMobileMobile(true);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className='logo' />
      <ul className={mobileMenu?'':' hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500}>Programs</Link></li>
        <li><Link to='abouts' smooth={true} offset={-150} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
        <li><Link to='testimonails' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li>
          <Link className='btn' to='contact' smooth={true} duration={500}>
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
