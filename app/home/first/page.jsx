'use client';
import React from 'react'
import {motion} from 'framer-motion'
import Bckgrund from '../../components/DottedWaveBackground'
import Link from 'next/link';

const page = () => {
  return (
    <>
    <Bckgrund/>
    <main>
        <div className='flex w-full  justify-around items-end'>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1 }} className='h-full w-full p-5 flex flex-col gap-3 items-start justify-center'><motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 2 }} className='text-6xl font-semibold'>Elevate your business with us</motion.h2><p className='text-2xl text-gray-600'>Where your vision meets our technology</p><p>We transform your vision into reality through innovative, reliable software solutions designed for excellence. Let's innovate, grow, and succeed together.</p><Link href='../solutions' className='text-white bg-sky-600 px-10 py-3.5 rounded-lg hover:bg-sky-900 active:bg-sky-300'>Explore More</Link></motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1 }} className='h-full w-full p-5 flex justify-items-end items-end-safe'><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 2 }}><div className='flex w-full justify-end'><div className='flex flex-col bg-sky-700 rounded- rounded-b-full py-10 px-16 w-[50%]'><h2 className='text-white font-semibold text-center text-4xl'>What we Offer</h2><p className='text-white text-center'>At SoftCyber, we exist to bridge the gap between your ambitions and technological reality. We provide tailored, end-to-end solutions that secure your operations and drive growth. With a focus on excellence, we deliver confidence, empowerment, and success.</p></div></div></motion.div></motion.div>
    </div>
    </main>
    </>
  )
}

export default page