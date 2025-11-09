import {cn} from '@/lib/utils'
import Link from 'next/link'

const Button = ({children, className, variant = "primary", ...props}) => {
    const variantClasses = {
        primary: "bg-blue-500 text-white",
        secondary: "bg-gray-500 text-white"
    }
  return (
    <Link className={cn('px-4 py-2 rounded-sm', variantClasses[variant], className)}>Button</Link>
  )
}

export default Button