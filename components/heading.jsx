import { cn } from '@/lib/utils'

const Heading = ({ children, className, tag: Tag = 'h2' }) => {
  return (
    <Tag className={cn(
      'text-2xl md:text-4xl lg:text-6xl tracking-tight font-display font-bold',
      className
    )}>
      {children}
    </Tag>
  )
}

export default Heading
