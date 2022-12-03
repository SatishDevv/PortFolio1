import React from 'react'
import './experience.css'
import { TbBrandJavascript } from "react-icons/tb";
import { FaBootstrap } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { RiHtml5Fill } from "react-icons/ri";
import { GrReactjs } from "react-icons/gr";
import { DiJava } from "react-icons/di";
import { SiPython } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { VscTerminalLinux } from "react-icons/vsc";
import { GiSpiderWeb } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { SiWindows } from "react-icons/si";


const Experience = () => {
  return (
    <section id='experiencs' >
      <h5>What Skill I have</h5>
      <h2>My Experience </h2>
      <div className="container experience__container">
        <div className="experence__frontend " >
            <h3>Frontend Development</h3>
                      <div className="experience__content">
              <article className='experience__details' >
                <RiHtml5Fill className='experience__details-icon' />
                <div>
                  <h4>HTML</h4>
                  <small className='experience__details' >experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <SiCss3 className='experience__details-icon' />
                <div>
                  <h4>CSS</h4>
                  <small className='experience__details' > intermediate </small>
                </div>
              </article>
              <article className='experience__details' >
                <FaBootstrap className='experience__details-icon' />
                  <div>
                  <h4>Bootstrap</h4>
                  <small className='experience__details' >intermediate</small>
                  </div>
              </article>
              <article className='experience__details' >
                <TbBrandJavascript className='experience__details-icon' />
                <div>
                  <h4>JavaScript</h4>
                  <small className='experience__details' >intermediate</small>
                </div>
              </article>
              <article className='experience__details' >
                <GrReactjs className='experience__details-icon' />
                  <div>
                    <h4>React</h4>
                    <small className='experience__details' > intermediate </small>
                  </div>
              </article>
              <article className='experience__details' >
                <DiJava className='experience__details-icon' />
                <div>
                  <h4>java</h4>
                  <small className='experience__details' >Basic</small>
                </div>
              </article>
            </div>
        </div>
        {/* ++++++++++++++++++++++++++++ end of frontend +++++++++++++++++++ */}

          {/* backend section works  */}

        <div className="experience__backend">
              <div className='experience__details1' > 
                {/* <BsPatchCheckFill className='experience__details-icon' /> */}
                <h3>Backend Development</h3>
              </div >
            <div className="experience__content">
              <article className='experience__details' >
                <DiJava className='experience__details-icon' />
                <div>
                  <h4>Java</h4>
                  <small className='experience__details' >experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <SiPython className='experience__details-icon' />
                  <div>
                    <h4>Python</h4>
                    <small className='experience__details' > intermediate </small>
                  </div>
              </article>
              <article className='experience__details' >
                <SiPhp className='experience__details-icon' />
                  <div>
                    <h4>Php</h4>
                    <small className='experience__details' >intermediate</small>
                  </div>     
              </article>
              <article className='experience__details' >
                <SiMysql className='experience__details-icon' />
                <div>
                  <h4>Mysql</h4>
                  <small className='experience__details' >intermediate</small>
                </div>
              </article>
              <article className='experience__details' >
                <IoLogoNodejs className='experience__details-icon' />
                  <div>
                    <h4>Node</h4>
                    <small className='experience__details' > Basic </small>
                  </div>
              </article>
              {/* <article className='experience__details' >
                <DiJava/>
                <h4>java</h4>
                <small className='experience__details' >Basic</small>
              </article> */}
            </div>

            {/* ++++++++++++++++++++ END of the backend++++++++++++++++++++++ */}

        </div>

      </div>
      <div className="container1 experience__container">
        <div className="experence__frontend " >
          <div className='experience__details1 ' >
          {/* <BsPatchCheckFill className='experience__details-icon' /> */}
            <h3>Cyber Security</h3>
            </div>
            <div className="experience__content">
              <article className='experience__details' >
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Fundamentals</h4>
                  <small className='experience__details' >experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <VscTerminalLinux className='experience__details-icon' />
                <div>
                  <h4>Linux Exploitation</h4>
                  <small className='experience__details' > intermediate </small>
                </div>
              </article>
              <article className='experience__details' >
                <GiSpiderWeb className='experience__details-icon' />
                  <div>
                  <h4>Web Exploitation</h4>
                  <small className='experience__details' >intermediate</small>
                  </div>
              </article>
              <article className='experience__details' >
                <FaNetworkWired className='experience__details-icon' />
                <div>
                  <h4>Network Exploitation</h4>
                  <small className='experience__details' >intermediate</small>
                </div>
              </article>
              <article className='experience__details' >
                <SiGnuprivacyguard className='experience__details-icon' />
                  <div>
                    <h4>Privilege Escalation</h4>
                    <small className='experience__details' > intermediate </small>
                  </div>
              </article>
              <article className='experience__details' >
                <SiWindows className='experience__details-icon' />
                <div>
                  <h4>Windows Exploitation</h4>
                  <small className='experience__details' >intermediate</small>
                </div>
              </article>
            </div>
        </div>
        {/* ++++++++++++++++++++++++++++ end of frontend +++++++++++++++++++ */}

          {/* backend section works  */}

        <div className="experience__backend">
              <div className='experience__details1 ' > 
                {/* <BsFillPatchCheckFill className='experience__details-icon' /> */}
                <h3> Data Structures and Algorithms Using Java</h3>
              </div >
            <div className="experience__content">
              <article className='experience__details' >
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>String</h4>
                  <small className='experience__details' >experience</small>
                </div>
              </article>
              <article className='experience__details' >
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>Sorting</h4>
                    <small className='experience__details' > intermediate </small>
                  </div>
              </article>
              <article className='experience__details' >
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>Array</h4>
                    <small className='experience__details' >intermediate</small>
                  </div>     
              </article>
              <article className='experience__details' >
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Recursion</h4>
                  <small className='experience__details' >intermediate</small>
                </div>
              </article>
              <article className='experience__details' >
                <BsFillPatchCheckFill className='experience__details-icon' />
                  <div>
                    <h4>Tree</h4>
                    <small className='experience__details' > Basic </small>
                  </div>
              </article>
               <article className='experience__details' >
                <BsFillPatchCheckFill className='experience__details-icon' />
                <div>
                  <h4>Backtracking</h4>
                  <small className='experience__details' >Basic</small>
                </div>
              </article> 
            </div>

            {/* ++++++++++++++++++++ END of the backend++++++++++++++++++++++ */}

        </div>

      </div>
    </section>
  )
}

export default Experience