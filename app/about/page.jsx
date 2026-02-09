'use client';
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const page = () => {
  return (
    <div className='w-full'>
      <h2 className='text-center text-4xl mb-10'>About us</h2>
      <motion.div initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}>
        <div className='flex flex-col items-center md:flex-row text-center md:text-left justify-between w-full h-fit'>
          <div className='w-full'>
            <p className='text-xl'>At SoftCyber Technologies, we are more than just an IT service provider; we are your dedicated partner in Malawi's digital transformation. Founded in Lilongwe, we specialize in delivering custom, reliable, and affordable technology solutions—from dynamic website development to robust cybersecurity, mobile applications, and enterprise systems. We understand the unique challenges and opportunities within the Malawian market, and we build every solution with local insight and global standards.</p>
          </div>
          <div className='w-full'><Image src="/team/team.jpeg" alt='softcerber team' width={600} height={200} className='rounded-lg'/></div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }} className='flex flex-col md:flex-row gap-3 w-full justify-between mt-5'>
        <div className='w-full bg-[#eef1fa] dark:bg-gray-800/25 rounded-lg px-5'><h3 className='capitalize font-stretch-100%'>our mission</h3><p></p></div>
        <div className='w-full bg-[#eef1fa] dark:bg-gray-800/25 rounded-lg px-5'><h3 className='capitalize font-stretch-100%'>our vision</h3><p></p></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}>
        <h3 className='text-center text-2xl mb-5 mt-5'>Our Journey & Approach</h3>
        <p className='md:px-10 text-center'>Our story began with a simple observation: many Malawian businesses were held back by outdated technology, costly generic software, or a lack of accessible digital tools. We set out to change that. As outlined in our business strategy, we operate on a partnership-driven model. We start by listening deeply to understand your specific challenges and goals, then craft a tailored plan using the right technologies. We believe in transparency, offering clear, fixed-price packages (from our Essential website at MK195,000 to comprehensive enterprise systems) and flexible payment terms. Our commitment extends beyond the launch, with dedicated post-project support to ensure your solutions continue to deliver value.</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}>
        <h3 className='text-center text-2xl mb-5'>Why Choose SoftCyber?</h3>
        <p className='font-semibold text-center mb-2'>Local Expertise, Global Standards: <span className='font-medium'>We combine an intimate understanding of Malawi's business landscape with professional, modern development practices.</span></p>
        <p className='font-semibold text-center mb-2'>Custom-Built Solutions: <span className='font-medium'>We reject the one-size-fits-all approach. Every website, app, or system we build is designed to fit your unique workflow and ambitions.</span></p>
        <p className='font-semibold text-center mb-2'>Commitment to Security: <span className='font-medium'> In an era of growing cyber threats, we prioritize building secure, resilient digital infrastructure to protect your assets and data.</span></p>
        <p className='text-gray-500 text-center'>We are honored to contribute to Malawi's growing digital economy and look forward to building the future of your business with you.</p>
      </motion.div>
    </div>
  )
}

export default page