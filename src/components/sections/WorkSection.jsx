const work = [
  { period: 'now', company: 'Blue Radix', role: 'Frontend Architect' },
  { period: '2025', company: 'PhotonFirst', role: 'Frontend Engineer' },
  { period: '2023', company: 'MapXact', role: 'UX Developer' },
  { period: '2022', company: 'JOZ', role: 'UX Designer' },
  { period: '2017', company: 'KPN', role: 'UX Designer' },
]

export default function WorkSection() {
  return (
    <div className="divide-y divide-black/[0.04] dark:divide-white/[0.06]">
      {work.map((job, i) => (
        <div key={i} className="flex justify-between items-baseline py-2.5">
          <div>
            <div className="text-[0.8rem] mb-0.5 text-black/75 dark:text-white/75">{job.company}</div>
            <div className="text-[0.7rem] text-black/40 dark:text-white/40">{job.role}</div>
          </div>
          <span className={`text-[0.65rem] font-mono ${job.period === 'now' ? 'text-black/55 dark:text-white/55' : 'text-black/25 dark:text-white/25'}`}>
            {job.period}
          </span>
        </div>
      ))}
      <a
        href="https://www.linkedin.com/in/cengiz-ulusoy"
        target="_blank"
        rel="noopener noreferrer"
        className="block pt-4 text-[0.7rem] text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
      >
        See more work experiences &rarr;
      </a>
    </div>
  )
}
