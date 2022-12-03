import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTryhackme} from 'react-icons/si'


const HeaderSocials = () => {
  return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/satish-ghode-a75883232/" target="_blank" ><BsLinkedin/></a>
            <a href="https://github.com/Satishghode/" target="_blank" ><FaGithub/></a>
            <a href="https://tryhackme.com/p/MR.satish" target="_blank" ><SiTryhackme/></a>
        </div>
  )
}

export default HeaderSocials