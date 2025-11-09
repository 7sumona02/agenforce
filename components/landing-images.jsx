'use client'

import {easeOut, motion} from 'motion/react'
import Image from 'next/image'
import {cn} from '@/lib/utils'

const LandingImages = () => {
    return (
        <div className='relative min-h-140 w-full pt-20 perspective-distant'>
            <motion.div initial={{opacity:0, y:-100}} animate={{opacity:1,y:0}} transition={{duration:0.5, ease:easeOut}} className='perspective-[4000px]'><Image src='https://assets.aceternity.com/screenshots/4.jpg' height={1080} width={1920} className={cn('absolute inset-0 rounded-lg mask-r-from-20% mask-b-from-20% shadow-2xl')} style={{transform: "rotateY(30deg) rotateX(20deg) rotateZ(-20deg)"}} alt='Hero' /></motion.div>
            <motion.div initial={{opacity:0, y:-400}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.5, ease:easeOut}} className='perspective-[4000px] translate-x-20 -translate-y-40 md:translate-y-20'><Image src='https://assets.aceternity.com/screenshots/3.jpg' height={1080} width={1920} className={cn('absolute inset-0 rounded-lg mask-r-from-50% mask-b-from-50% shadow-2xl')} style={{transform: "rotateY(20deg) rotateX(40deg) rotateZ(-20deg)"}} alt='Hero' /></motion.div>
        </div>
    )
}

export default LandingImages