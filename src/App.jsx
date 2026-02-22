import Card from './components/Card'

export default function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="gradient-bg-top" />
      <div className="gradient-bg-bottom" />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-6">
        <Card />
      </div>
    </div>
  )
}
