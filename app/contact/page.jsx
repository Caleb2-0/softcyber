'use client';
import React from 'react'
import Floating from './modules/float'
import FTextArea from './modules/textarea'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faClockFour, faPhone, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {motion} from 'framer-motion';

export default async function Page() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-center text-4xl'>Get in touch with us</h2>
      <p className='text-center text-gray-400 text-md font-light'>Leave us a message and our team will get back to your during working hours within 12 hours.</p>
      <div className='w-full gap-5 flex flex-col-reverse lg:flex-row  justify-between'>
      <motion.div initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }} className='w-full flex flex-col gap-3'>
        <h2 className='text-2xl text-[#011222] dark:text-white text-center md:text-left'>Contact details</h2>
        <div className='p-5 bg-[#eef1fa] rounded-lg dark:bg-sky-950/50'>
          <h3 className='font-mono text-[#797979]'><span><FontAwesomeIcon icon={faPhone} size='md' color='gray'/></span> Phone numbers</h3>
          <p className='font-medium text-gray-800 dark:text-gray-200'>+265 992 247 334</p>
          <p className='font-medium text-gray-800 dark:text-gray-200'>+265 992 247 334</p>
          <p className='font-medium text-gray-800 dark:text-gray-200'>+265 992 247 334</p>
        </div>
        <div className='p-5 bg-[#eef1fa] rounded-lg dark:bg-sky-950/50'>
          <h3 className='font-mono text-[#797979]'><span><FontAwesomeIcon icon={faEnvelope} size='md' color='gray'/></span> Email address</h3>
          <a href="mailto:softcyber606@gmail.com"><p className='font-medium text-gray-800 dark:text-gray-200'>softcyber606@gmail.com</p></a>
        </div>
        <div className='p-5 bg-[#eef1fa] rounded-lg dark:bg-sky-950/50'>
          <h3 className='font-mono text-[#797979]'><span><FontAwesomeIcon icon={faClockFour} size='md' color='gray'/></span> Working hours</h3>
          <p className='font-medium text-gray-800 dark:text-gray-200'>Monday - Friday : </p>
          <p className='font-medium text-gray-800 dark:text-gray-200'>Saturday : </p>
          <p className='font-medium text-gray-800 dark:text-gray-200'>Sunday : </p>
        </div>
        <div className='p-5 bg-[#eef1fa] rounded-lg dark:bg-sky-950/50 flex flex-col gap-3'>
          <h3 className='font-mono text-[#797979]'><span><FontAwesomeIcon icon={faUserFriends} size='md' color='gray'/></span> Follow us on</h3>
          <div className='flex items-center justify-around'>
            <a href=""><FontAwesomeIcon icon={faFacebook} size='lg' color='blue' /></a>
            <a href=""><FontAwesomeIcon icon={faInstagram} size='lg' color='red' /></a>
            <a href=""><FontAwesomeIcon icon={faTiktok} size='lg' color='black' /></a>
            <a href=""><FontAwesomeIcon icon={faYoutube} size='lg' color='red' /></a>
          </div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }} className='w-full'>
        <h2 className='text-2xl text-[#011222] dark:text-white text-center md:text-right'>Send us a message</h2>
      <div className='flex flex-col items-center w-full m-auto h-auto'>
        <form action="" className='flex flex-col w-full md:border border-gray-300 rounded-lg p-3 m-3'>
          <Floating id='name' label='Your name or organization name' type='text'/>
          <Floating id='email' label='Email address' type='email'/>
          <Floating id='phone' label='Phone number (Optional)' type='tel'/>
          <Floating id='subject' label='Subject' type='text'/>
          <FTextArea id='message' label='Your message...'/>
          <button className='bg-black hover:bg-gray-800 text-white text-[20px] py-2 w-full m-auto mt-3 cursor-pointer rounded-lg active:bg-amber-100 active:text-gray-500'>Send</button>
          <p className='text-center'>By continueing, you agree to be contacted through the details you have provided.</p>
        </form>
      </div>
    </motion.div>
    </div>
    </div>
    
  );
}