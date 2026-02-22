import { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const handler = (e) => setIsDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setIsDark(!isDark)}
      className="text-black/40 dark:text-white/40 hover:text-black/70 dark:hover:text-white/70 transition-colors"
    >
      {isDark ? (
        <svg width="16" height="16" fill="none" viewBox="0 0 25 24">
          <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42" />
          </g>
        </svg>
      ) : (
        <svg width="16" height="16" fill="none" viewBox="0 0 21 20">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z" />
        </svg>
      )}
    </button>
  )
}
