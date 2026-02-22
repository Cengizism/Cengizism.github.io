const tags = ['React', 'TypeScript', 'Next.js', 'Three.js', 'Figma']

export default function AboutSection() {
  return (
    <div>
      <p className="text-[0.8rem] leading-[1.75] mb-6 text-black/55 dark:text-white/55">
        UX Design and Frontend Engineering, combined.{' '}
        I build real-time data experiences and enterprise systems with care for both users and code.
      </p>

      <div className="flex flex-wrap gap-1.5 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1.5 bg-black/[0.03] dark:bg-white/[0.05] rounded text-[0.65rem] tracking-[0.02em] text-black/50 dark:text-white/50"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="text-[0.65rem] font-mono text-black/25 dark:text-white/25 space-y-0.5">
        <div>10+ years experience</div>
        <div>Eindhoven, Netherlands</div>
      </div>
    </div>
  )
}
