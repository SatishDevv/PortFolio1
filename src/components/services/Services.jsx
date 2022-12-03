import React from 'react'
import './services.css'
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id='services' >
        <h5>I can help</h5>
        <h2>About this content</h2>

        <div className="container services_container ">
          <article className="service">
            <div className="service__head">
              <h3>Full Stack Web Development</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon' />
                  <p>Designing user interactions with frontend code.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Ensuring webpages are mobile-optimized.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Receiving design handoffs from UX and UI designers and coding them.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Testing and debugging on both the front- and backend.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Communicating with data scientists and analysts on the data architecture.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Staying up-to-date on new technologies which could improve technology .</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Writing documentation.</p>
                </li>
            </ul>
          </article>
          {/* END OF THE UI/UX  */}
          <article className="service">
            <div className="service__head">
              <h3>Solve DSA Q using Java</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon' />
                  <p>Introduction to Basic Java</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Introduction to Recursion, Applications of Recursion, Writing base cases in Recursion and much more...</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Introduction and Advantages, Types of Arrays, Operations on Arrays and much more...</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Binary Search Iterative and Recursive, Binary Search and various associated problems.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Introduction and Time complexity analysis, Application of Hashing, Discussion on Direct Address Table and much more.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Understanding the Stack data structure, Applications of Stack, Implementation of Stack in Array and Linked List and much more.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Implementation of the queue using array and LinkedList and much more.</p>
                </li>
            </ul>
          </article>
          {/* END OF THE END OF WEB DESIGN */}
          <article className="service">
            <div className="service__head">
              <h3>Cyber Security</h3>
            </div>

            <ul className="service__list">
              <li>
                  <BiCheck className='service__list-icon' />
                  <p>Development, testing, analysis and implementation of security systems.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Assessment and management of system vulnerability.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Security threats, attacks and other similar events: Response.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Development of threat prevention strategies.</p>
                </li>
                <li>
                  <BiCheck className='service__list-icon' />
                  <p>Regular production of reports for administrators and executives.</p>
                </li>
            </ul>
          </article>
          {/* END OF THE cyber   */}
        </div>

    </section>
  )
}

export default Services