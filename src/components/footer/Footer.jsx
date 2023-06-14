import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiTryhackme } from "react-icons/si";
import { SiHackthebox } from "react-icons/si";



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo' >SATISH</a>
      
      <ul className="permalinks">
      <li><a href="#">HOME</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#expeirience">Expeirience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testmonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/"><BsLinkedin/></a>
        <a href="https://www.instagram.com/mr.satishghode"><BsInstagram/></a>
        <a href="https://twitter.com/SatishGhode13"><BsTwitter/></a>
        <a href="https://tryhackme.com/p/MR.satish"><SiTryhackme/></a>
        <a href="https://app.hackthebox.com/profile/overview"><SiHackthebox/></a>
      </div>
      <div className="footer__copyright">
        <small className='satish' >&copy; SATISH . All reserved. </small>
      </div>
    </footer>
  )
}

export default Footer