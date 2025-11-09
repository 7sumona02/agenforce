'use client'
import { MoonIcon, SunIcon } from '@phosphor-icons/react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // ✅ Prevents SSR/client mismatch

  const SWITCH = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <button onClick={SWITCH} className="size-4 flex justify-center items-center">
      <SunIcon className="rotate-0 scale-100 transition-all duration-200 dark:-rotate-90 dark:scale-0" size={15} />
      <MoonIcon className="rotate-90 scale-0 transition-all duration-200 dark:rotate-0 dark:scale-100" size={15} />
    </button>
  )
}

export default ModeToggle
