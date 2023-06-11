import emailjs from '@emailjs/browser';
import React, { useRef, useState, useContext } from 'react';
import { NavbarContext } from '../context/NavbarContext';
import { ThemeContext } from '../context/ThemeContext';
import { useMediaQuery } from 'react-responsive';

export default function ContactUs() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const {isNavbarOpen, ToggleNavbar} = useContext(NavbarContext);
  const {theme} = useContext(ThemeContext);
  const isSmallScreen = useMediaQuery({ maxDeviceWidth: 640 });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_60pm2pg', 'template_esgdpwo', form.current, '2vS0dzpCTDBYbkCGy')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

      form.current.reset();
      setEmail('');
      setPhone('');
      setFullName('');
  }

  const handleFullName = (e) => {
    setFullName(e.target.value);
    console.log(fullName);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  }
  const handlePhone = (e) => {
    setPhone(e.target.value);
    console.log(phone);
  }
  console.log(isNavbarOpen)
  return (
    <div className={`w-screen min-h-screen h-screen overflow-hidden sm:mr-8 flex flex-col gap-20 sm:grid sm:grid-cols-1 sm:place-items-center items-center ${isNavbarOpen === false ? 'relative z-100 top-12':'static z-[-1]'}`}>
      <div className="sm:absolute pt-10 sm:top-24 sm:mt-0 text-6xl font-verla">
        <h1 className=''>צור קשר</h1>
      </div>
      <form ref={form} onSubmit={sendEmail} className={`${isNavbarOpen === false ? 'relative z-100':'static z-[0]'}`}>
        <div className="flex lg:flex-row flex-col gap-5 sm:h-full items-center justify-center">
          <div className='flex flex-col gap-3 justify-end font-verla w-screen sm:w-auto px-3'>
            <input type="text" name="user_name" value={fullName} onChange={(e) => handleFullName(e)} placeholder="שם מלא" className="p-2 rounded-full focus:border-2 focus:text-primary focus:border-primary focus:outline-none" />
            <input type="email" name="user_email" value={email} onChange={(e) => handleEmail(e)} placeholder="אימייל" className="p-2 rounded-full focus:border-2 focus:text-primary focus:border-primary focus:outline-none" />
            <input type="phone" name="user_phone" value={phone} onChange={(e) => handlePhone(e)} placeholder="מס פלאפון" className="p-2 rounded-full focus:border-2 focus:text-primary focus:border-primary focus:outline-none" />
          </div>
          <div className="px-5">
          <textarea rows='5' cols={isSmallScreen ? '20' : '54'} placeholder='הודעה' name='message' className="p-2 rounded-xl focus:border-2 focus:text-primary focus:border-primary focus:outline-none"/>
          </div>
        </div>
          <div className="flex w-full justify-center">
            <button type='submit' className={`${theme === 'light' ? 'bg-primary' : 'bg-secondary text-primary hover:bg-secondary/90'} hover:bg-primary/90 mt-5 text-white rounded-full px-20 py-4`}>שלח</button>
          </div>
      </form>
    </div>
  )
}
