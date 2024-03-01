import FilterField from './FilterField'
import InputRange from './InputRange'
import Select from './Select'

import { MOCK_OPTIONS } from '../mock/mocks';

function FilterSection() {
  return (
    <aside className="max-w-xs">
      <form>
        // Filtro de calorías máximas
        <FilterField label="Calorías máximas">
          <InputRange />
        </FilterField>

        // Filtro de tipo de plato
        <FilterField label="">
          <Select options={MOCK_OPTIONS}/>
        </FilterField>

        // Filtro de tiempo de preparación máximo
        // TODO

        // Filtro de país
        // TODO

        // Filtro de estación del año
        // TODO

        // Filtro de dietas especiales
        // TODO
      </form>
    </aside>
  )
}

export default FilterSection
