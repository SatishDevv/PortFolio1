import React from 'react'
import './portfolio.css'
import  IMG1  from "../../assets/Dashbord-1.png"
import  IMG2  from "../../assets/portfolio.png"
import  IMG3  from "../../assets/Youtube.png"
import  IMG4  from "../../assets/Portfolio4.png"
import  IMG5  from "../../assets/portfolio5.png"
import  IMG6  from "../../assets/cyber.png";


const Portfolio = () => {
  return (
    <section id='portfolio' >
        <h5>my Projects</h5>
        <h2>Portfolio </h2>
        <div className="container portfolio__container">
            
            <article className='portfolio__item' >
                <div className="portfolio__item-image">
                    <img src={IMG1} alt="" />
                </div>
                <h3>
                    Responsive Admin Dashboard :
                </h3>
                <small>
                        Using HTML CSS & JavaScript with  Light & Dark Mode
                </small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/Satishghode/Admin-Dashbord" className='btn' target='_blank' >Github</a>
                    <a href="#" className='btn btn-primary' target='_blank' > Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item' >
                <div className="portfolio__item-image">
                    <img src={IMG3} alt="" />
                </div>
                <h3>Responsive Youtube User Page :</h3>
                <small>
                        Using HTML CSS & JavaScript with.
                </small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com/Satishghode/youtube-clone" className='btn' target='_blank' >Github</a>
                    <a href="#" className='btn btn-primary' target='_blank' > Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item' >
                <div className="portfolio__item-image">
                    <img src={IMG2} alt="" />
                </div>
                <h3>Responsive Portfolio : </h3>
                <small>
                        Using HTML CSS & JavaScript with  Light & Dark Mode
                </small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com" className='btn' target='_blank' >Github</a>
                    <a href="#" className='btn btn-primary' target='_blank' > Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item' >
                <div className="portfolio__item-image">
                    <img src={IMG4} alt="" />
                </div>
                <h3>Responsive React Portfolio : </h3>
                <small>
                        Using HTML CSS & React with  Multiple Optins.
                </small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com" className='btn' target='_blank' >Github</a>
                    <a href="#" className='btn btn-primary' target='_blank' > Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item' >
                <div className="portfolio__item-image">
                    <img src={IMG4} alt="" />
                </div>
                <h3>Responsive React Portfolio :</h3>
                <small>
                Using HTML CSS & React with  Multiple Optins.
                </small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com" className='btn' target='_blank' >Github</a>
                    <a href="#" className='btn btn-primary' target='_blank' > Live Demo</a>
                </div>
            </article>
            <article className='portfolio__item' >
                <div className="portfolio__item-image">
                    <img src={IMG6} alt="" />
                </div>
                <h3>Learn Cyber Security </h3>
                <small>
                
                </small>
                <div className="portfolio__item-cta">
                    <a href="https://github.com" className='btn' target='_blank' >Github</a>
                    <a href="#" className='btn btn-primary' target='_blank' > Live Demo</a>
                </div>
            </article>
            
            
        </div>

    </section>
  )
}

export default Portfolio