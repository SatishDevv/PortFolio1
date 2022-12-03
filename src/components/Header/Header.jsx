import React from 'react'
import '../Header/header.css'
import CTA from './CTA'
import ME from '../../assets/s2.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ghode Satish</h1>
        <h5 className="text-light">Bachelor of Computer Applications and  Cyber Security Student </h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact"className='scroll__down' >scroll Down</a> 
      </div>
    </header>
  )
}

export default Header