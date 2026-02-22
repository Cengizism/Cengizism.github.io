const sunIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none" viewBox="0 0 25 24">
    <g stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" clipPath="url(#sun-clip)">
      <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42" />
    </g>
    <defs>
      <clipPath id="sun-clip">
        <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.5)" />
      </clipPath>
    </defs>
  </svg>
)

const moonIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20">
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
    />
  </svg>
)

export default function ThemeSwitcher() {
  return (
    <div className="fixed right-2 sm:right-4 top-0 z-20 flex mt-6 bg-white dark:bg-gray-900 rounded-3xl p-1 w-fit scale-75 sm:scale-100">
      <button
        type="button"
        aria-label="Use Dark Mode"
        onClick={() => {
          document.documentElement.classList.add('dark')
          localStorage.setItem('theme', 'dark')
        }}
        className="flex items-center justify-center dark:bg-primary rounded-3xl p-2 w-12 h-10 transition"
      >
        {moonIcon}
      </button>
      <button
        type="button"
        aria-label="Use Light Mode"
        onClick={() => {
          document.documentElement.classList.remove('dark')
          localStorage.setItem('theme', 'light')
        }}
        className="flex items-center justify-center bg-primary dark:bg-transparent rounded-3xl p-2 w-12 h-10 transition"
      >
        {sunIcon}
      </button>
    </div>
  )
}
