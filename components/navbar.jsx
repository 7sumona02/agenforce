'use client'

import {useState} from 'react'
import Logo from '@/components/logo'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { IconLayoutSidebar, IconX } from '@tabler/icons-react';
import {AnimatePresence, motion} from 'motion/react'

const navLinks = [
        { href: '/features', title: 'Features' },
        { href: '/product', title: 'Product' },
        { href: '/socials', title: 'Socials' },
        { href: '/pricing', title: 'Pricing' },
    ]

const Navbar = () => {
    return (
        <div className='border-b border-neutral-200 dark:border-neutral-800'>
            <DesktopNavbar />
            <MobileNavbar />
        </div>
    )
}

export default Navbar

export const MobileNavbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex md:hidden px-4 py-2 justify-between'>
            <Logo />
            <button onClick={() => setOpen(true)}><IconLayoutSidebar className='size-4' /></button>

            <AnimatePresence>
                {open && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1, backdropFilter: "blur(15px)",background: 'transparent'}} exit={{opacity:0, backdropFilter: "blur(0px)", background: 'rgba(255,255,255,0.5)'}} transition={{duration:0.2}} className='fixed inset-0 z-50 px-4 py-1.5 w-full h-full'>
                        <div className='flex justify-between items-start'>
                            <Logo />
                        <button className='absolute top-2 right-2' onClick={() => setOpen(false)}>
                            <IconX className='size-4' />
                        </button>

                        <div className='flex flex-col gap-6 my-10 absolute top-10 left-4'>
                            {navLinks.map((item, index) => (
                                <motion.div key={index + item.title} initial={{opacity:0,x:-4}} animate={{opacity:1,x:0}} transition={{duration:0.2, delay: index*0.1}}>
                                    <Link href={item.href} key={index} className='text-2xl text-neutral-600 dark:text-neutral-400 font-medium'>{item.title}</Link>
                                </motion.div>
                            ))}
                        </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
         </div>
    )
}

export const DesktopNavbar = () => {
    return (
        <Container className="py-4 items-center justify-between hidden lg:flex">
            <Logo />
            <div className='flex items-center gap-4'>
                {navLinks.map((item, index) => (
                    <Link href={item.href} key={index} className='text-sm text-neutral-600 dark:text-neutral-400 font-medium'>{item.title}</Link>
                ))}
            </div>
            <div className='flex items-center gap-4'>
                <Link href='/login' className='px-4 py-2 rounded-md text-sm text-neutral-600 dark:text-neutral-400 font-medium'>Login</Link>
                <Button href='/signup'>Signup</Button>
            </div>
        </Container>
    )
}