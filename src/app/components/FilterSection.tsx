"use client"
import { useState } from 'react';
import FilterField from './FilterField'
import InputRange from './InputRange'
import Select from './Select'

import { MOCK_OPTIONS } from '../mock/mocks';

function FilterSection() {

  const [maxCaloriesValue, setMaxCaloriesValue] = useState(0);
  const [kindsOfDish, setKindsOfDish] = useState([]);

  const handleSubmit = () => {
    console.log('Handling submit')
  }

  return (
    <aside className="max-w-xs">
        // Filtro de calorías máximas
      <form onSubmit={handleSubmit}>  
        <FilterField label="Calorías máximas">
          <InputRange value={maxCaloriesValue} handleValue={setMaxCaloriesValue}/>
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
