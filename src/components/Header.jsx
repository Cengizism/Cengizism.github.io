import ThemeSwitcher from './ThemeSwitcher'

export default function Header() {
  return (
    <div className="px-7 pt-7 pb-5 border-b border-black/[0.04] dark:border-white/[0.06]">
      <div className="flex items-center justify-between mb-5">
        <span className="text-black/25 dark:text-white/25 text-[0.65rem] tracking-[0.15em] font-mono">CU</span>
        <ThemeSwitcher />
      </div>

      <div className="w-[72px] h-[72px] rounded-full overflow-hidden mx-auto mb-4 border border-black/[0.06] dark:border-white/10 shadow-sm">
        <img
          src="https://cengizism.com/images/cengiz-ulusoy.jpg"
          alt="Cengiz Ulusoy"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-[1.35rem] font-medium tracking-[-0.01em] mb-1.5 text-center text-black/85 dark:text-white/85">
        Cengiz Ulusoy
      </h1>
      <p className="text-[0.75rem] tracking-[0.02em] text-center text-black/40 dark:text-white/40">
        Technical Software Consultant
      </p>
    </div>
  )
}
