import {cn} from '@/lib/utils'

export const Card = ({className, children}) => {
  return (
    <div className={cn('bg-neutral-50 dark:bg-neurtal-800 rounded-lg', className)}>{children}</div>
  )
}

export const CardTitle = ({className, children}) => {
    return (
        <h3 className={cn('text-lg md:text-2xl font-bold font-display', className)}>
            {children}
        </h3>
    )
}

export const CardContent = ({children, className}) => {
    return (
        <div className={cn('px-4 md:px-8 pb-6 md:pb-12 flex justify-between items-center', className)}>{children}</div>
    )
}

export const CardCTA = ({children, className, ...rest}) => {
    return (
    <button className={cn('size-5 md:size-10 rounded-full border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0 active:scale-[0.95] transition duration-200', className)} {...rest}>{children}</button>
    )
}

export const CardSkeleton = ({children, className}) => {
    return (
        <div className={cn('min-h-40 md:min-h-80', className)}>{children}</div>
    )
}