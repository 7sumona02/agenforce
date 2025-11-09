import {cn} from '@/lib/utils'

const Container = ({className, children}) => {
  return (
    <div className={cn("max-w-7xl mx-auto", className)}>{children}</div>
  )
}

export default Container