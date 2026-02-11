"use client";
import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'

const page = () => {
  return (
    <div>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 2 }} className='text-3xl mb-10 text-center capitalize font-semibold'>business</motion.h2>
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 2 }} className='flex items-center justify-between gap-5 w-full'>
        <div className='w-full items-center justify-center'>
          <div className='gap-3 bg-sky-700 p-5 w-70 h-70 rounded-full flex flex-col items-center justify-center m-auto animate-pulse'>
            <p className='font-semibold text-white text-center text-2xl'>MEET OUR BRILLIANT TEAM</p>
            <Link className='text-white bg-sky-600 px-10 py-2 rounded-lg hover:bg-sky-900 active:bg-sky-300' href='../team'>Learn More</Link>
          </div>
        </div>
        <div className='w-full'>
          <h3 className='text-2xl capitalize'>Undesrtanding the terms for your Businesss</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.<br/>

Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget

Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget</p>
        </div>
      </motion.div>
    </div>
  )
}

export default page