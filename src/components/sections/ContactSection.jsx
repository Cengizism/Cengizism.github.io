const contacts = [
  { label: 'get in touch', value: 'contact form', href: 'https://docs.google.com/forms/d/e/1FAIpQLSe3ZJHtJuyoqrh-pI8GdWyMmuf01vtOH2Y3W14SWRSufIZ8SA/formResponse' },
  { label: 'linkedin', value: '/in/cengiz-ulusoy', href: 'https://linkedin.com/in/cengiz-ulusoy' },
  { label: 'github', value: '@cengizism', href: 'https://github.com/cengizism' },
  { label: 'web', value: 'cengizism.com', href: 'https://cengizism.com' },
]

export default function ContactSection() {
  return (
    <div>
      <p className="text-[0.85rem] leading-[1.6] mb-6 text-black/75 dark:text-white/75">
        Open for projects and collaborations.
      </p>

      <div className="flex flex-col gap-3">
        {contacts.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-between items-center group"
          >
            <span className="text-[0.65rem] font-mono text-black/50 dark:text-white/50">{item.label}</span>
            <span className="text-[0.75rem] text-black/60 dark:text-white/60 group-hover:text-black/80 dark:group-hover:text-white/80 transition-colors">
              {item.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}
