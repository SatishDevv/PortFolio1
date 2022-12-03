import React from 'react'
import './about.css'
import ME from '../../assets/s2.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'> 
      <h5>Get TO Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card' >
                <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>0+  Years Working </small>
            </article>

            <article className='about__card' >
                <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>0+  Working </small>
            </article>

            <article className='about__card' >
                <VscFolderLibrary className='about__icon' />
              <h5>Porjects</h5>
              <small>7+  Projects</small>
            </article>
            </div>          
            <p>Hi I am Ghode Satish. I am a Bachelor of Computer Application undergraduate from Sangamner College and a technology enthusias.
            I have a deep interest on development and i have made 7 project using Frontend technologies and Backend technologies.
            As well as i am interested in Cyber Security and practicing my cyber skill on tryhackme. total participants 1212715 and  my rank is  9574.
            </p>
            <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about