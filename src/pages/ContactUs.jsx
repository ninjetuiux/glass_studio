import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';

export default function ContactUs() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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

  return (
    <div className="w-screen h-screen grid place-items-center sm:mr-[18%] sm:pl-[18%] 2xl:pl-[40%] grid-cols-1">
      <div className="absolute top-24 text-6xl font-verla">
        <h1>צור קשר</h1>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex lg:flex-row flex-col gap-5 h-full items-center justify-center">
          <div className='flex flex-col gap-3 justify-end font-verla w-screen sm:w-auto px-3'>
            <input type="text" name="user_name" value={fullName} onChange={(e) => handleFullName(e)} placeholder="שם מלא" className="p-2 rounded-full focus:border-2 focus:text-primary focus:border-primary focus:outline-none" />
            <input type="email" name="user_email" value={email} onChange={(e) => handleEmail(e)} placeholder="אימייל" className="p-2 rounded-full focus:border-2 focus:text-primary focus:border-primary focus:outline-none" />
            <input type="phone" name="user_phone" value={phone} onChange={(e) => handlePhone(e)} placeholder="מס פלאפון" className="p-2 rounded-full focus:border-2 focus:text-primary focus:border-primary focus:outline-none" />
          </div>
          <div className="">
            <textarea rows='5' cols='54' placeholder='הודעה' name='message' className="p-2 rounded-xl"/>
          </div>
        </div>
          <div className="flex w-full justify-center">
            <button type='submit' className="bg-primary hover:bg-primary/90 mt-5 text-white rounded-full px-20 py-4">שלח</button>
          </div>
      </form>
    </div>
  )
}
