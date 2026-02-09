'use client';
import React from 'react'
import {motion} from 'framer-motion'
import Bckgrund from '../../components/DottedWaveBackground'

const page = () => {
  return (
    <>
    <Bckgrund/>
    <main>
        <div className='flex w-full h-screen justify-between gap-3 items-center'>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1 }} className='h-full w-full p-5 flex items-center justify-items-start'><motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 2 }}>left side</motion.h2></motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 1 }} className='h-full w-full p-5 flex items-center justify-center'><motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 2 }}><div className='bg-amber-700 rounded-bl-4xl rounded-se-4xl p-10'><p>right side</p></div></motion.div></motion.div>
    </div>
    </main>
    </>
  )
}

export default page