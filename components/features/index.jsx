import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from '@/components/features/card'
import Container from '../container'
import Heading from '../heading'
import Subheading from '../subheading'
import { IconPlus } from '@tabler/icons-react'
import SkeletonOne from '@/components/features/skeletons/first'

const Features = () => {
    return (
        <Container className='py-10 md:py-20 lg:py-32'>
                <div className='flex justify-between items-baseline-last gap-10'>
                <Heading tag='h2' className='capitalize'>Built for fast moving <br /> teams that need control.</Heading>
                <Subheading>
                    Agents work inside your existing tools, with built-in approvals, brand and policy guardrails, and full tracebility. Every action is auditable, every outcome accountable.
                </Subheading>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-10 md:my-20'>
                    <Card className='rounded-tl-3xl rounded-bl-3xl'>
                        <CardSkeleton><SkeletonOne /></CardSkeleton>
                        <CardContent>
                            <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
                            <CardCTA><IconPlus /></CardCTA>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardSkeleton />
                        <CardContent>
                            <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
                            <CardCTA><IconPlus /></CardCTA>
                        </CardContent>
                    </Card>
                    <Card className='rounded-tr-3xl rounded-br-3xl'>
                        <CardSkeleton />
                        <CardContent>
                            <CardTitle>Approvals, Guardrails, and Full Auditability</CardTitle>
                            <CardCTA><IconPlus /></CardCTA>
                        </CardContent>
                    </Card>
                </div>
        </Container>
    )
}

export default Features