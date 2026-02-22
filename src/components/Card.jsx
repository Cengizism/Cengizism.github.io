import { useState } from 'react'
import Header from './Header'
import Navigation from './Navigation'
import Footer from './Footer'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import WorkSection from './sections/WorkSection'
import ContactSection from './sections/ContactSection'

const sections = { about: AboutSection, skills: SkillsSection, work: WorkSection, contact: ContactSection }

export default function Card() {
  const [activeSection, setActiveSection] = useState('about')
  const Section = sections[activeSection]

  return (
    <div className="w-full max-w-[380px] bg-white/70 dark:bg-black/30 backdrop-blur-md border border-black/[0.06] dark:border-white/10 rounded-xl shadow-sm overflow-hidden">
      <Header />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="px-7 py-6 min-h-[280px]">
        <Section />
      </div>
      <Footer />
    </div>
  )
}
