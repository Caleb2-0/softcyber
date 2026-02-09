import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faTiktok } from '@fortawesome/free-brands-svg-icons/faTiktok';
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react'

const currentDate = new Date().getFullYear;
const footer = () => {
  return (
    <div className='w-full rounded-b-full mt-5'>
        <div className='flex flex-col'>
            <div className='px-10 text-[#797979] bg-sky-200 rounded-t-lg flex flex-col md:flex-row items-center justify-between font-semibold'><h4 className='font-stretch-100%'>Connect with us</h4><div className='flex justify-between gap-5'><FontAwesomeIcon icon={faFacebookF} color='blue' size='md' /><FontAwesomeIcon icon={faInstagram} color='red-300' size='md' /><FontAwesomeIcon icon={faTiktok} color='black' size='md' /><FontAwesomeIcon icon={faYoutube} color='red' size='md' /></div></div>
            <div className='flex flex-col md:flex-row justify-between px-10 bg-sky-300'>
                <div>
                    <h4 className='font-semibold capitalize text-center md:text-left'>softcyber</h4>
                    <p className='text-sm text-center md:text-left'>company description</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h4 className='capitalize font-semibold'>useful links</h4>
                    <Link className='text-sm' href="./privacy">Privacy policy</Link>
                    <Link className='text-sm' href="./terms">Terms and Conditions</Link>
                </div>
                <div className='flex flex-col items-center md:items-end'>
                    <h4 className='capitalize font-semibold text-center md:text-right'>Contact us</h4>
                    <div className='flex items-center'><FontAwesomeIcon icon={faPhone} size='md' color='gray'/><p className='text-sm'><a href="tel:+265992247334">0992247334 </a><a href="tel:+265993857016">0993857016 </a><a href="tel:+265885320654">0885320654</a></p></div>
                    <div className='flex items-center'><FontAwesomeIcon icon={faEnvelope} size='md' color='gray'/><a className='text-sm' href="mailto:softcyber606@gmail.com">Send us an email</a></div>
                </div>
            </div>
            <div><p className='text-center font-light text-sm rounded-br-lg rounded-bl-lg bg-gray-200 text-gray-600'>&copy; {new Date().getFullYear()} SOFTCYBER</p></div>
        </div>
    </div>
  )
}

export default footer