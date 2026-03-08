const skills = [
  { category: 'Frontend', items: ['React', 'Vue', 'Angular', 'Next.js', 'TypeScript', 'Three.js'] },
  { category: 'Design', items: ['Figma', 'Design Systems', 'UX Research'] },
  { category: 'Systems', items: ['OAuth / Azure B2C', 'Real-time Data', 'Architecture'] },
]

export default function SkillsSection() {
  return (
    <div className="space-y-5">
      {skills.map((group) => (
        <div key={group.category}>
          <div className="text-[0.6rem] tracking-[0.1em] uppercase mb-2.5 text-black/35 dark:text-white/35">
            {group.category}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {group.items.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1.5 bg-black/[0.02] dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.08] rounded text-[0.7rem] text-black/60 dark:text-white/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
