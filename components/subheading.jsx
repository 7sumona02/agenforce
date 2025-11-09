import { cn } from '@/lib/utils'

const Subheading = ({ children, className, tag: Tag = 'p' }) => {
  return (
    <Tag className={cn(
      'text-base md:text-lg text-neutral-400 dark:text-neutral-600 font-inter max-w-xl',
      className
    )}>
      {children}
    </Tag>
  )
}

export default Subheading
