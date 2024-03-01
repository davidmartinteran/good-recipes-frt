import FilterSection from './components/FilterSection'
import HomeContent from './components/HomeContent'

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-10">
      <FilterSection />
      <HomeContent />
    </main>
  )
}
