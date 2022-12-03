import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";
import  { useRef } from 'react';
import emailjs from 'emailjs-com'


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tuy61yp', 'template_9580qlp', form.current, '4x1ERhqxn7kjI6rh-')

    e.target.reset()
  };


  return (
    <section id='contact' >
      <h5>Get In Touch</h5>
      <h2>Contact ME</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>satishghode9999@gmail.com</h5>
            <a href="mailto:satishghode9075@gmail.com">Sent Message</a>
          </article>
          <article className="contact__option">
            <SiMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Mr.satish Ghode</h5>
            <a href="https://m.me/mr.satishghode/">Sent Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 9075414838</h5>
            <a href="https://api.whatsapp.com/send?phone=+919075414838">Sent Message</a>
          </article>
        </div>
        {/* END OF THE CONCATS OPTIONS */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email"  placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'  required ></textarea>
          <button type='submit ' className='btn btn-primary'>Sent Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact