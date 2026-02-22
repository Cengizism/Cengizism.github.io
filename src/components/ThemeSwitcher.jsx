import { useState, useEffect } from 'react'

const SunIcon = ({ stroke }) => (
  <svg width="12" height="12" fill="none" viewBox="0 0 25 24">
    <g stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" clipPath="url(#sc)">
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42" />
    </g>
    <defs><clipPath id="sc"><path fill="#fff" d="M0 0H24V24H0z" transform="translate(.5)" /></clipPath></defs>
  </svg>
)

const MoonIcon = ({ stroke }) => (
  <svg width="12" height="12" fill="none" viewBox="0 0 21 20">
    <path stroke={stroke} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z" />
  </svg>
)

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setIsDark(!isDark)}
      className={[
        'relative flex items-center w-14 h-7 rounded-full p-0.5 transition-colors duration-300 focus:outline-none',
        isDark ? 'bg-gray-700' : 'bg-gray-200',
      ].join(' ')}
    >
      {/* icon track — two equal halves */}
      <span className="absolute inset-0 z-20 flex pointer-events-none">
        <span className="flex-1 flex items-center justify-center">
          <SunIcon stroke={isDark ? 'rgba(255,255,255,0.3)' : '#7D7AFF'} />
        </span>
        <span className="flex-1 flex items-center justify-center">
          <MoonIcon stroke={isDark ? '#fff' : 'rgba(0,0,0,0.25)'} />
        </span>
      </span>
      {/* sliding knob */}
      <span
        className={[
          'relative z-10 w-6 h-6 rounded-full shadow-sm transition-all duration-300',
          isDark ? 'translate-x-7 bg-primary' : 'translate-x-0 bg-white',
        ].join(' ')}
      />
    </button>
  )
}
