import HeaderButton from './HeaderButton'
import HeaderInput from './HeaderInput'
import { HeaderButtons } from '../enums/enums'

function Header() {
  return (
    <header className="flex justify-between mb-10">
      <h1 className="font-extrabold text-3xl hidden md:inline">Good<span className="text-amber-400">Recipes</span></h1>
      <HeaderInput />
      <section className="hidden sm:flex gap-4">
        <HeaderButton iconName={HeaderButtons.FRIDGE} />
        <HeaderButton iconName={HeaderButtons.BLOG} />
        <HeaderButton iconName={HeaderButtons.FAVORITES} />
        <HeaderButton iconName={HeaderButtons.PROFILE} />
      </section>
    </header>
  )
}

export default Header
