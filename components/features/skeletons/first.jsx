import {cn} from '@/lib/utils'
import { IconCircleDashedCheck, IconClock, IconRipple } from '@tabler/icons-react'

const SkeletonOne = () => {
  return (
    <div>
        <SkeletonCard icon={ <IconCircleDashedCheck className='size-4' />} title='Campaign Planner'
        description='Creates clear, ready-to-use campaign briefs using product info, audience data, and past results.'
        badge={<Badge text='120S' variant='danger' />} />
    </div>
  )
}

export default SkeletonOne

// const SkeletonCard = ({icon, title, description, badge}) => {
//    return (
//      <div className='max-w-[90%] mx-auto w-full p-3 rounded-lg bg-neutral-100 border border-neutral-100 dark:border-neutral-700'>
//         <div className='flex gap-3 items-center'>
//             <IconCircleDashedCheck className='size-4' />
//             <p className='text-sm font-bold'>Campaign Planner</p>
//             <Badge text='120S' variant='danger' />
//         </div>
//         <p className='text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-3'>Creates clear, ready-to-use campaign briefs using product info, audience data, and past results.</p>
//         <div className='flex items-center gap-2 flex-wrap mt-4'>
//             <Tag text='Google Ads' />
//             <Tag text='SaaS' />
//             <Tag text='Content' />
//         </div>
//     </div>
//    )
// }

const SkeletonCard = ({icon, title, description, badge}) => {
   return (
     <div className='max-w-[90%] mx-auto w-full p-3 rounded-lg bg-neutral-100 border border-neutral-100 dark:border-neutral-700'>
        <div className='flex gap-3 items-center'>
            {icon}
            <p className='text-sm font-bold'>{title}</p>
            {badge}
        </div>
        <p className='text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-3'>
            {description}
        </p>
        <div className='flex items-center gap-2 flex-wrap mt-4'>
            <Tag text='Google Ads' />
            <Tag text='SaaS' />
            <Tag text='Content' />
        </div>
    </div>
   )
}

export const Tag = ({text}) => {
    return (
        <div className='px-2 py-1 rounded-sm bg-neutral-200 dark:bg-neutral-700 text-xs'>{text}</div>
    )
}

export const Badge = ({variant, text}) => {
    return  (
        <div className={cn('px-1 py-0.5 rounded-full flex items-center gap-1 w-fit',
            variant === 'danger' && 'bg-red-300/10 border border-red-300 text-red-500',
            variant === 'warning' && 'bg-yellow-300/10 border border-yellow-300 text-yellow-500',
            variant === 'success' && 'bg-green-300/10 border border-green-300 text-green-500',
        )}>
            <IconClock className={cn('size-3')} />
            <IconRipple />
            <p className='text-xs font-bold'>{text}</p>
        </div>
    )
}