const sections = ['about', 'skills', 'work', 'contact']

export default function Navigation({ activeSection, setActiveSection }) {
  return (
    <div className="flex border-b border-black/[0.04] dark:border-white/[0.06]">
      {sections.map((section) => (
        <button
          key={section}
          onClick={() => setActiveSection(section)}
          className={[
            'flex-1 py-3 bg-transparent border-none text-[0.65rem] tracking-[0.08em] cursor-pointer transition-all duration-200',
            'border-b -mb-px',
            activeSection === section
              ? 'border-black/60 dark:border-white/60 text-black/75 dark:text-white/75'
              : 'border-transparent text-black/30 dark:text-white/30 hover:text-black/50 dark:hover:text-white/50',
          ].join(' ')}
        >
          {section}
        </button>
      ))}
    </div>
  )
}
