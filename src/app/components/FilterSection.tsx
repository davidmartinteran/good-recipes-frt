import FilterField from "./FilterField"

function FilterSection() {
  return (
    <aside>
      <form>
        <FilterField label="Calorías máximas">
          <input type='range'min={0} max={50}
          />
        </FilterField>
      </form>
    </aside>
  )
}

export default FilterSection
