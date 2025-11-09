import Logo from '@/components/logo'
import Container from '@/components/container'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

const Navbar = () => {
    const navLinks = [
        { href: '/features', title: 'Features' },
        { href: '/product', title: 'Product' },
        { href: '/socials', title: 'Socials' },
        { href: '/pricing', title: 'Pricing' },
    ]
  return (
        <div className='border-b border-neutral-200 dark:border-neutral-800'>
            <Container className="py-4 flex items-center justify-between">
                <Logo />
                <div className='flex items-center gap-4'>
                    {navLinks.map((item, index) => (
                        <Link href={item.href} key={index} className='text-sm text-neutral-600 dark:text-neutral-400 font-medium'>{item.title}</Link>
                    ))}
                </div>
                <div className='flex items-center gap-4'>
                    <Link href='/login'className='px-4 py-2 rounded-md text-sm text-neutral-600 dark:text-neutral-400 font-medium'>Login</Link>
                    <Button href='/signup'>Signup</Button>
                </div>
            </Container>
        </div>
    )
}

export default Navbar