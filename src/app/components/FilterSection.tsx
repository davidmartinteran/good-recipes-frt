import FilterField from './FilterField'
import InputRange from './InputRange'

function FilterSection() {
  return (
    <aside className="max-w-xs">
      <form>
        <FilterField label="Calorías máximas">
          <InputRange />
        </FilterField>
      </form>
    </aside>
  )
}

export default FilterSection
