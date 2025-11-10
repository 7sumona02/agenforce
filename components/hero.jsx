import Container from '@/components/container'
import Subheading from '@/components/subheading'
import LandingImages from '@/components/landing-images'
import Heading from './heading'
import {Button} from '@/components/ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='h-screen overflow-hidden'>
        <Container>
            <Heading tag='h1'>Agents that do the work <br /> Approvals that keep you safe.</Heading>
            <Subheading className='py-8'>
                Deploy AI agents that plan, act through your tools, and report outcomes - without changing how your teams work.
            </Subheading>
            <div className='flex items-center gap-6'>
                <Button className='shadow-brand'>Start your free trial</Button>
                <Button variant='outline' asChild><Link href='#'>View role based demos</Link></Button>
            </div>
            <LandingImages />
        </Container>
    </section>
  )
}

export default Hero